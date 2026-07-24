import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { AuthorizationService } from './authorization.service';

// ============================================================
// Auth Models (matching the backend DTOs)
// ============================================================
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expiration?: string;
  // Actual API response wraps user data inside a `user` object
  user?: {
    id: string;
    userType: number;
    companyId?: number;
    email?: string;
    userName?: string;
    [key: string]: any;
  };
  // Legacy / flat shape fallbacks
  userId?: string;
  userTypeId?: number;
  companyId?: number;
  isVerified?: boolean;
  [key: string]: any;
}

export interface ForgetPasswordParams {
  email: string;
}

export interface OTPRequest {
  email: string;
  otp: string;
}

export interface ChangePasswordRequest {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RegisterRequest {
  [key: string]: any;
}

export interface UserProfile {
  id?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  userTypeId?: number;
  [key: string]: any;
}

/** Minimal user info extractable from the JWT without an API call */
export interface CurrentUser {
  userId:    string | null;
  email:     string | null;
  role:      string | null;
  companyId: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY    = 'MT_token';
  private readonly USER_ID_KEY  = 'userId';
  private readonly USER_TYPE_KEY = 'userTypeId';

  private router       = inject(Router);
  private apiService   = inject(ApiService);
  private tokenService = inject(TokenService);
  private authz        = inject(AuthorizationService);

  // ── Auth state observable ────────────────────────────────────────
  private _authState$ = new BehaviorSubject<boolean>(this._checkLoggedIn());

  /** Subscribe to know when the user logs in or out */
  readonly isLoggedIn$ = this._authState$.asObservable();

  // ── Login ────────────────────────────────────────────────────────
  login(email: string, password: string): Observable<LoginResponse> {
    return this.apiService.post<LoginRequest, LoginResponse>('Auth/login', { email, password }).pipe(
      tap((response: LoginResponse) => {
        if (response?.token) {
          localStorage.setItem(this.TOKEN_KEY, response.token);
          // API returns userId at top level; also check nested user.id
          const userId = response.userId ?? response.user?.id;
          if (userId) localStorage.setItem(this.USER_ID_KEY, String(userId));
          // API returns userType at top level as number (1=Employee, 2=Contractor, 3=Business)
          const userType = (response as any).userType ?? response.user?.userType ?? response.userTypeId;
          if (userType != null) {
            localStorage.setItem(this.USER_TYPE_KEY, String(userType));
          }
          const companyId = (response as any).companyId ?? response.user?.companyId;
          if (companyId != null) {
            localStorage.setItem('companyId', String(companyId));
          }
          // Refresh AuthorizationService cache from the new JWT.
          this.authz.refreshPermissions();
          this._authState$.next(true);
        } else {
          // 200 response but no token — treat as auth failure
          throw new Error((response as any)?.message ?? 'Login failed');
        }
      })
    );
  }

  /**
   * POST /api/Admin/login — Super Admin only.
   * Separate endpoint from Auth/login; same token shape.
   * Stores the token identically so all downstream services work unchanged.
   */
  adminLogin(email: string, password: string): Observable<LoginResponse> {
    return this.apiService.post<LoginRequest, LoginResponse>('Admin/login', { email, password }).pipe(
      tap((response: LoginResponse) => {
        if (response?.token) {
          localStorage.setItem(this.TOKEN_KEY, response.token);
          const userId = response.userId ?? response.user?.id;
          if (userId) localStorage.setItem(this.USER_ID_KEY, String(userId));
          const userType = (response as any).userType ?? response.user?.userType ?? response.userTypeId;
          if (userType != null) localStorage.setItem(this.USER_TYPE_KEY, String(userType));
          const companyId = (response as any).companyId ?? response.user?.companyId;
          if (companyId != null) localStorage.setItem('companyId', String(companyId));
          this.authz.refreshPermissions();
          this._authState$.next(true);
        } else {
          throw new Error((response as any)?.message ?? 'Login failed');
        }
      })
    );
  }

  // ── Register ─────────────────────────────────────────────────────
  register(data: FormData): Observable<any> {
    return this.apiService.postForm<any>('Auth/register', data);
  }

  // ── Forget Password ──────────────────────────────────────────────
  forgetPassword(email: string): Observable<any> {
    return this.apiService.get<any>('Auth/forgetPasswordMail', { email });
  }

  // ── Verify OTP ───────────────────────────────────────────────────
  verifyOTP(data: OTPRequest): Observable<any> {
    return this.apiService.post<OTPRequest, any>('Auth/VerifyOTP', data);
  }

  // ── Change Password ──────────────────────────────────────────────
  changePassword(data: ChangePasswordRequest): Observable<any> {
    return this.apiService.post<ChangePasswordRequest, any>('Auth/forgetPassword', data);
  }

  // ── Get Current User Profile (API call) ─────────────────────────
  getUserProfile(): Observable<UserProfile> {
    return this.apiService.get<UserProfile>('User/Get');
  }

  /**
   * Returns user info decoded from the local JWT — no API call needed.
   * Use getUserProfile() when you need fresh server-side data.
   */
  getCurrentUser(): CurrentUser {
    return {
      userId:    this.tokenService.getUserId(),
      email:     this.tokenService.getEmail(),
      role:      this.tokenService.getUserRole(),
      companyId: this.tokenService.getCompanyId(),
    };
  }

  // ── Is Logged In ─────────────────────────────────────────────────
  isLoggedIn(): boolean {
    return this._checkLoggedIn();
  }

  private _checkLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY) && !this.tokenService.isTokenExpired();
  }

  // ── Get Token ────────────────────────────────────────────────────
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // ── Get User Type (1=Employee, 2=Contractor, 3=Business) ────────
  getUserTypeId(): number | null {
    const value = localStorage.getItem(this.USER_TYPE_KEY);
    return value !== null ? Number(value) : null;
  }

  // ── Logout ───────────────────────────────────────────────────────
  logout(): void {
    // Clear all auth-related storage
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_ID_KEY);
    localStorage.removeItem(this.USER_TYPE_KEY);
    localStorage.removeItem('companyId');

    // Clear AuthorizationService cache.
    this.authz.clear();
    this._authState$.next(false);

    // SessionService monitors the auth state and will stop itself when
    // authenticated-layout is destroyed (ngOnDestroy → stopMonitoring())
    this.router.navigate(['/login']);
  }

  // ── Lookup APIs ──────────────────────────────────────────────────
  getJobTitles():      Observable<any[]> { return this.apiService.get<any[]>('Lookup/GetAllJobTitles'); }
  getQualifications(): Observable<any[]> { return this.apiService.get<any[]>('Lookup/GetAllQualifications'); }
  getUniversities():   Observable<any[]> { return this.apiService.get<any[]>('Lookup/GetAllUniversities'); }
  getCountries():      Observable<any[]> { return this.apiService.get<any[]>('Lookup/GetAllCountries'); }
  getIndustries():     Observable<any[]> { return this.apiService.get<any[]>('Lookup/GetAllIndustries'); }
  getCities(countryId: number): Observable<any[]> {
    return this.apiService.get<any[]>('Lookup/GetCityByCountry', { CountryId: countryId });
  }
}

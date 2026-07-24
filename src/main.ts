import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authenticationInterceptor } from './services/authentication-interceptor';
import { Chart, registerables } from 'chart.js';
import { isDevMode } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';

Chart.register(...registerables);
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES || []),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authenticationInterceptor])
    ),
    provideTransloco({
        config: {
          availableLangs: ['en', 'ar'],
          defaultLang: 'en',
          fallbackLang: 'en',
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })
  ],
}).catch(err => console.error(err));

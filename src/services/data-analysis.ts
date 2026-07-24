import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardData, MetricCard, MonthlyRevenue, InvoiceStatistics } from '../models/analitical-models-fordashboard';

@Injectable({
  providedIn: 'root'
})
export class DataAnalysisService {

  /**
   * Returns static demo data for the public landing page dashboard preview.
   *
   * Previously this called Team/GetAll, Project/GetAll and Meeting/GetAll —
   * all protected endpoints. Unauthenticated visitors received a 401, which
   * the auth interceptor turned into an immediate redirect to /login,
   * making the public landing page inaccessible without a login.
   *
   * The landing page shows a visual demo, not live company data, so static
   * values are correct here. Authenticated dashboard widgets should use their
   * own dedicated services.
   */
  getDashboardData(): Observable<DashboardData> {
    const metricCards: MetricCard[] = [
      {
        title: 'Total Employees',
        value: '1,240',
        change: '+12% this month',
        chartData: [45, 55, 35, 65, 50, 70, 60, 75, 55, 65, 50, 60],
        chartColor: 'red'
      },
      {
        title: 'Total Projects',
        value: '340',
        change: '+8% this month',
        chartData: [30, 45, 60, 75, 65, 80, 70, 85, 75, 80, 70, 75],
        chartColor: 'blue'
      },
      {
        title: 'Total Meetings',
        value: '87',
        change: '+5% this month',
        chartData: [40, 50, 45, 60, 55, 70, 65, 75, 70, 80, 75, 85],
        chartColor: 'green'
      },
    ];

    const monthlyRevenue: MonthlyRevenue[] = [
      { month: 'Jan', revenue: 15000 },
      { month: 'Feb', revenue: 20000 },
      { month: 'Mar', revenue: 18000 },
      { month: 'April', revenue: 30000 },
      { month: 'May', revenue: 62000 },
      { month: 'June', revenue: 45000 },
      { month: 'July', revenue: 50000 },
      { month: 'Aug', revenue: 70000 },
      { month: 'Sep', revenue: 25000 },
      { month: 'Oct', revenue: 20000 },
      { month: 'Nov', revenue: 35000 },
      { month: 'Dec', revenue: 75000 },
    ];

    const invoiceStatistics: InvoiceStatistics = {
      value: '4.123',
      label: 'Invoice',
      percentage: 65
    };

    return of({
      metricCards,
      monthlyRevenue,
      invoiceStatistics,
    } as DashboardData);
  }
}

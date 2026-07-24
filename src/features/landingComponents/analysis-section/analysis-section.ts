import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import {
  DashboardData,
  InvoiceStatistics,
  MetricCard,
  MonthlyRevenue
} from '../../../models/analitical-models-fordashboard';
import { DataAnalysisService } from '../../../services/data-analysis';
import { LanguageService } from '../../../services/language.service';

type MetricCardViewModel = MetricCard & {
  chart: ChartData<'line'>;
  chartOptions: ChartOptions<'line'>;
  trendClass: string;
};

@Component({
  selector: 'app-analysis-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analysis-section.html',
  styleUrls: ['./analysis-section.css']
})
export class AnalysisSectionComponent implements OnInit {
  private readonly dataAnalysisService = inject(DataAnalysisService);
  readonly languageService = inject(LanguageService);

  private getCSSVar(varName: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }

  private hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  metricCards: MetricCardViewModel[] = [];
  invoiceStatistics: InvoiceStatistics | null = null;

  revenueChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Revenue',
        backgroundColor: '',
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 18,
        maxBarThickness: 18
      }
    ]
  };

  revenueChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: '',
          font: { family: 'DM Sans', size: 12 }
        }
      },
      y: {
        beginAtZero: true,
        grid: { color: '' },
        border: { display: false },
        ticks: {
          color: '',
          font: { family: 'DM Sans', size: 12 },
          callback: value => `${Number(value) / 1000}k`
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    }
  };

  invoiceChartData: ChartData<'doughnut'> = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [0, 100],
        backgroundColor: ['', ''],
        borderWidth: 0,
        hoverOffset: 0
      }
    ]
  };

  readonly invoiceChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    cutout: '76%'
  };

  ngOnInit(): void {
    this.initChartColors();
    this.dataAnalysisService.getDashboardData().subscribe((dashboardData: DashboardData) => {
      this.metricCards = dashboardData.metricCards.map(card => this.createMetricCardViewModel(card));
      this.revenueChartData = this.createRevenueChartData(dashboardData.monthlyRevenue);
      this.invoiceStatistics = dashboardData.invoiceStatistics;
      this.invoiceChartData = this.createInvoiceChartData(dashboardData.invoiceStatistics);
    });
  }

  private initChartColors(): void {
    const primary = this.getCSSVar('--brand-primary-600');
    const neutral400 = this.getCSSVar('--brand-neutral-400');
    const neutral600 = this.getCSSVar('--brand-neutral-600');
    const neutral50 = this.getCSSVar('--brand-neutral-50');
    const tertiary = this.getCSSVar('--brand-tertiary-500');

    this.revenueChartData = {
      ...this.revenueChartData,
      datasets: [{ ...this.revenueChartData.datasets[0], backgroundColor: primary }]
    };

    this.revenueChartOptions = {
      ...this.revenueChartOptions,
      scales: {
        x: {
          ...(this.revenueChartOptions.scales?.['x'] ?? {}),
          ticks: { color: neutral600, font: { family: 'DM Sans', size: 12 } }
        },
        y: {
          ...(this.revenueChartOptions.scales?.['y'] ?? {}),
          grid: { color: neutral50 },
          ticks: {
            color: neutral400,
            font: { family: 'DM Sans', size: 12 },
            callback: value => `${Number(value) / 1000}k`
          }
        }
      }
    };

    this.invoiceChartData = {
      ...this.invoiceChartData,
      datasets: [{
        ...this.invoiceChartData.datasets[0],
        backgroundColor: [tertiary, neutral50]
      }]
    };
  }

  private createMetricCardViewModel(card: MetricCard): MetricCardViewModel {
    return {
      ...card,
      chart: {
        labels: card.chartData.map((_, index) => index + 1),
        datasets: [
          {
            data: card.chartData,
            borderColor: this.getMetricColor(card.chartColor),
            backgroundColor: this.getMetricFill(card.chartColor),
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0.4,
            borderWidth: 2
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4
          }
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
      trendClass: `analysis-section__metric-trend--${card.chartColor}`
    };
  }

  private createRevenueChartData(monthlyRevenue: MonthlyRevenue[]): ChartData<'bar'> {
    return {
      labels: monthlyRevenue.map(item => item.month),
      datasets: [
        {
          ...this.revenueChartData.datasets[0],
          data: monthlyRevenue.map(item => item.revenue)
        }
      ]
    };
  }

  private createInvoiceChartData(invoiceStatistics: InvoiceStatistics): ChartData<'doughnut'> {
    return {
      ...this.invoiceChartData,
      datasets: [
        {
          ...this.invoiceChartData.datasets[0],
          data: [invoiceStatistics.percentage, 100 - invoiceStatistics.percentage]
        }
      ]
    };
  }

  private getMetricColor(color: MetricCard['chartColor']): string {
    switch (color) {
      case 'red':
        return this.getCSSVar('--brand-tertiary-500');
      case 'green':
        return this.getCSSVar('--functional-success-500');
      case 'blue':
      default:
        return this.getCSSVar('--brand-primary-600');
    }
  }

  private getMetricFill(color: MetricCard['chartColor']): string {
    const hex = this.getMetricColor(color);
    return this.hexToRgba(hex, 0.12);
  }
}

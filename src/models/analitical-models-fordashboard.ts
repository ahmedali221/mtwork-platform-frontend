//we have sections for "Total Employees," "Total Revenue," "New Companies,"
//  and a larger chart with "Total Revenue" by month, and "Invoice Statistics."




//1.MetricCard: This interface defines the structure for the small summary cards (Total Employees, Total Revenue, New Companies). It includes a title, a displayed value, a change description, an array for a simple sparkline chart, and a color indicator for the chart.

export interface MetricCard {
  title: string;
  value: string;
  change: string; // e.g., "20% Increase Last 7 Days"
  chartData: number[]; // Simple array for sparkline charts
  chartColor: 'red' | 'green' | 'blue'; // To indicate growth/decline visually
}

//2.MonthlyRevenue: This is for the bar chart data, representing revenue for each month.
export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

//3.InvoiceStatistics: This represents the donut chart data, with a main value, a label, and a percentage for the fill.
export interface InvoiceStatistics {
  value: string; // e.g., "4.123"
  label: string; // e.g., "Invoice"
  percentage: number; // e.g., 80 for the donut chart fill
}


//4.DashboardData: This is our main interface, combining all the different pieces of data that the AnalysisSection will display.
//  It's a single, cohesive model for the entire dashboard-like section.
export interface DashboardData {
  metricCards: MetricCard[];
  monthlyRevenue: MonthlyRevenue[];
  invoiceStatistics: InvoiceStatistics;
}


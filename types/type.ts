export interface DomainTime {
    domain: string;
    time: number;
    percentage: number;
  }
  
  export interface DailyData {
    date: string;
    totalTime: number;
    domains: DomainTime[];
  }
  
  export interface WeeklyData {
    totalTime: number;
    totalDomains: number;
    dailyData: DailyData[];
  }
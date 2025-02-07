import { WeeklyData } from '@/types/type';

export const weeklyData: WeeklyData = {
  totalTime: 2340, // 39 hours in minutes
  totalDomains: 15,
  dailyData: [
    {
      date: 'Monday',
      totalTime: 420, // 7 hours in minutes
      domains: [
        { domain: 'github.com', time: 180, percentage: 42.86 },
        { domain: 'stackoverflow.com', time: 120, percentage: 28.57 },
        { domain: 'chat.openai.com', time: 60, percentage: 14.29 },
        { domain: 'google.com', time: 60, percentage: 14.29 }
      ]
    },
    {
      date: 'Tuesday',
      totalTime: 480,
      domains: [
        { domain: 'github.com', time: 240, percentage: 50 },
        { domain: 'stackoverflow.com', time: 120, percentage: 25 },
        { domain: 'youtube.com', time: 120, percentage: 25 }
      ]
    },
    {
      date: 'Wednesday',
      totalTime: 360,
      domains: [
        { domain: 'github.com', time: 180, percentage: 50 },
        { domain: 'docs.microsoft.com', time: 180, percentage: 50 }
      ]
    },
    {
      date: 'Thursday',
      totalTime: 420,
      domains: [
        { domain: 'github.com', time: 240, percentage: 57.14 },
        { domain: 'stackoverflow.com', time: 180, percentage: 42.86 }
      ]
    },
    {
      date: 'Friday',
      totalTime: 360,
      domains: [
        { domain: 'github.com', time: 180, percentage: 50 },
        { domain: 'youtube.com', time: 180, percentage: 50 }
      ]
    },
    {
      date: 'Saturday',
      totalTime: 180,
      domains: [
        { domain: 'youtube.com', time: 120, percentage: 66.67 },
        { domain: 'github.com', time: 60, percentage: 33.33 }
      ]
    },
    {
      date: 'Sunday',
      totalTime: 120,
      domains: [
        { domain: 'youtube.com', time: 120, percentage: 100 }
      ]
    }
  ]
};
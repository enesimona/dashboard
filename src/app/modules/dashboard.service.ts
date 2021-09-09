import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  bigChart() {
    return [
      {
        name: 'North America',
        data: [10, 50, 60, 100, 140, 200, 300],
      },
      {
        name: 'Africa',
        data: [2, 3, 5, 10, 20, 34, 50],
      },
      {
        name: 'Asia',
        data: [8, 30, 100, 125, 208, 220, 250],
      },
      {
        name: 'Europe',
        data: [10, 34, 40, 88, 126, 180, 200],
      },
      {
        name: 'South America',
        data: [8, 31, 29, 35, 58, 87, 100],
      },
      {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ];
  }

  cards() {
    return [71, 78, 38, 85];
  }

  pieChart() {
    return [
      {
        name: '25-35',
        y: 41.41,
        sliced: true,
        selected: true,
      },
      {
        name: '15-25',
        y: 10.84,
      },
      {
        name: '35-45',
        y: 29.85,
      },
      {
        name: '45-55',
        y: 10.67,
      },
      {
        name: '55-65',
        y: 4.18,
      },
      {
        name: 'over 65',
        y: 1.62,
      },
      {
        name: 'under 15',
        y: 1.3,
      },
    ];
  }
}

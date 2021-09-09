import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  country: string;
  position: number;
  users: number;
  revenue: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, country: 'US', users: 190, revenue: 20 },
  { position: 2, country: 'Argentina', users: 140, revenue: 18 },
  { position: 3, country: 'China', users: 120, revenue: 15 },
  { position: 4, country: 'Brasil', users: 98.8, revenue: 12 },
  { position: 5, country: 'Canada', users: 67.2, revenue: 11.5 },
  { position: 6, country: 'Russia', users: 40.1, revenue: 9 },
  { position: 7, country: 'UK', users: 38.6, revenue: 7.2 },
  { position: 8, country: 'France', users: 36, revenue: 6.1 },
  { position: 9, country: 'Spain', users: 33, revenue: 4.9 },
  { position: 10, country: 'India', users: 15, revenue: 4.2 },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigChart: any[] = [];
  cards: any[] = [];
  pieChart: any[] = [];

  displayedColumns: string[] = ['position', 'country', 'users', 'revenue'];
  dataSource = ELEMENT_DATA;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    // this.dataSource.paginator=this.paginator;
  }
}

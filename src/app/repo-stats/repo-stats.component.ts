import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'rs-repo-stats',
  templateUrl: './repo-stats.component.html',
  styleUrls: ['./repo-stats.component.scss'],
})
export class RepoStatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;
  createChart() {
    this.chart = new Chart('my-repo-stats', {
      type: 'doughnut',
      data: {
        labels: ['HTML/CSS', 'JavaScript', 'TypeScript', 'PHP'],
        datasets: [
          {
            label: 'Number of project used in',
            data: [3, 14, 15, 5],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'blue',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}

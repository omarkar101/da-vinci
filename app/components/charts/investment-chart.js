import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Chart from 'chart.js/auto';

export default class InvestmentChartComponent extends Component {
  @tracked chartInstance = null;
  @tracked chartData = null;

  @action
  setupChart(element) {
    const chartElement = element.querySelector('#investment-chart');

    // Initialize your chart data here or load it from a service
    this.chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Current 401(k) Account',
          data: [5000, 5500, 5300, 5600, 5800, 5500],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: {
            target: 'origin',
            above: 'rgba(75, 192, 192, 0.2)',
          },
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointHoverRadius: 6,
          pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
          lineTension: 0.4,
        },
        {
          label: 'Fidelity Investments 401(k) Account',
          data: [4800, 5200, 5400, 5600, 5900, 6300],
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: {
            target: 'origin',
            above: 'rgba(255, 99, 132, 0.2)',
          },
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointHoverRadius: 6,
          pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
          lineTension: 0.4,
        },
        {
          label: 'Empower Retirement 401(k) Account',
          data: [5200, 5800, 5900, 6100, 6300, 6700],
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: {
            target: 'origin',
            above: 'rgba(54, 162, 235, 0.2)',
          },
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointHoverRadius: 6,
          pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
          lineTension: 0.4,
        },
        {
          label: 'Vanguard 401(k) Account',
          data: [5500, 5900, 6000, 6300, 6400, 6800],
          borderColor: 'rgba(255, 205, 86, 1)',
          fill: {
            target: 'origin',
            above: 'rgba(255, 205, 86, 0.2)',
          },
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: 'rgba(255, 205, 86, 1)',
          pointHoverRadius: 6,
          pointHoverBackgroundColor: 'rgba(255, 205, 86, 1)',
          lineTension: 0.4,
        },
      ],
    };

    this.chartInstance = new Chart(chartElement, {
      type: 'line',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Account Balance',
            },
          },
        },
      },
    });
  }
}

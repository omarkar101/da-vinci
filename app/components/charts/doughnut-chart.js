import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Chart from 'chart.js/auto';

export default class DoughnutChartComponent extends Component {
  @tracked chartInstance = null;

  @action
  setupChart(element) {
    if (!this.chartInstance) {
      const ctx = element.querySelector('#doughnut-chart').getContext('2d');

      // Example data: Replace this with your actual 401(k) account data
      const accountBalances = [5000, 4800, 5200, 5500]; // Replace with actual balances
      const totalBalance = accountBalances.reduce(
        (acc, balance) => acc + balance,
        0,
      );

      const data = {
        labels: [
          'Current Account',
          'Fidelity Investments Account',
          'Empower Retirement Account',
          'Vanguard Account',
        ],
        datasets: [
          {
            data: accountBalances,
            backgroundColor: [
              'rgba(75, 192, 192, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 205, 86, 0.7)',
            ],
          },
        ],
      };

      this.chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: `Total: $${totalBalance.toFixed(2)}`,
              position: 'top',
              font: {
                size: 20,
              },
            },
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: (context) => {
                  const label = context.label || '';
                  const value = context.parsed || 0;
                  const percentage = ((value / totalBalance) * 100).toFixed(2);
                  return `${label}: $${value.toFixed(2)} (${percentage}%)`;
                },
              },
            },
          },
          cutout: '60%', // Adjust the cutout size to control the thickness of the doughnut
        },
      });
    }
  }
}

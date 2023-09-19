import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BillsTableComponent extends Component {
  @tracked
  columns = [
    { name: 'Insurance', valuePath: 'insuranceType' },
    { name: 'Date', valuePath: 'date' },
    { name: 'Amount', valuePath: 'amount' },
  ];

  @tracked
  bills = [
    { date: '2023-09-19', insuranceType: 'Health', amount: 100.0 },
    { date: '2023-09-18', insuranceType: 'Medical', amount: 150.0 },
    { date: '2023-09-18', insuranceType: 'Life', amount: 150.0 },
    { date: '2023-09-18', insuranceType: 'House', amount: 150.0 },
    { date: '2023-09-18', insuranceType: 'Auto', amount: 150.0 },
    { date: '2023-09-18', insuranceType: 'Pet', amount: 150.0 },
  ];

  @action
  sortBills(column) {
    if (this.sortedColumn === column) {
      // If the same column is clicked again, toggle the sorting order
      this.sortAscending = !this.sortAscending;
    } else {
      // If a new column is clicked, reset the sorting order
      this.sortAscending = true;
    }

    this.sortedColumn = column;

    this.bills = this.bills.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      // Check if the values are dates
      if (Date.parse(valueA) && Date.parse(valueB)) {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        const comparison = dateA - dateB;

        return this.sortAscending ? comparison : -comparison;
      }

      // Otherwise, treat them as strings
      const comparison = valueA.localeCompare(valueB);

      return this.sortAscending ? comparison : -comparison;
    });
  }
}

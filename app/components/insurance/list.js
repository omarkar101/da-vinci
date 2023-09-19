import Component from '@glimmer/component';

export default class InsuranceListComponent extends Component {
  get insurances() {
    return [
      { type: 'medical', label: 'Medical', isCore: true },
      { type: 'dental', label: 'Dental', isCore: true },
      { type: 'vision', label: 'Vision', isCore: true },
      { type: 'pet', label: 'Pet', isCore: false },
    ]
  }
}

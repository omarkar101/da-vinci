import Component from '@glimmer/component';

export default class PlanCard extends Component {
  get planName() {
    return this.args.planName ?? 'Plan Name';
  }

  get vendorName() {
    return this.args.vendorName ?? 'Vendor Name';
  }

  get deductibleValue() {
    return this.args.deductibleValue ?? '$1000';
  }

  get coinsuranceValue() {
    return this.args.coinsuranceValue ?? '$100';
  }

  get planNetworkValue() {
    return this.args.planNetworkValue ?? '$1000';
  }

  get isAcquired() {
    return this.args.status === 'current' ?? false;
  }
}

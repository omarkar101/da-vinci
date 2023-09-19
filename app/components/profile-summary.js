import Component from '@glimmer/component';

export default class ProfileSummaryCard extends Component {
  get profileName() {
    return this.args.profileName ?? 'John Doe';
  }

  get profileEmail() {
    return this.args.profileEmail ?? 'johndoe@organization.com';
  }

  get billsDueValue() {
    return this.args.billsDueValue ?? '2';
  }

  get retirementValue() {
    return this.args.retirementValue ?? '$40,000';
  }

  get plansValue() {
    return this.args.plansValue ?? '6';
  }
}

import Controller, { inject as controller } from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class InsuranceShoppingListController extends Controller {
  @tracked
  model;

  @controller('index.insurance')
  insuranceController;

  get filteredCoverages() {
    return this.insuranceController.filteredCoverages;
  }

  get insuranceType() {
    return this.model.insuranceType;
  }

  get selectedCoverages() {
    return this.insuranceController.allCoverageFields.find(
      ({ key }) => key === this.insuranceType,
    ).coverages;
  }
}

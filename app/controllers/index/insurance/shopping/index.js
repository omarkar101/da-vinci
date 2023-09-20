import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class InsuranceShoppingIndexController extends Controller {
  @controller('index.insurance')
  insuranceController;

  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = 'Insurance';
    this.indexController.iconSrc = null;
  }

  @tracked
  searchTerm = '';

  @action
  setSearchTerm(newTerm) {
    this.searchTerm = newTerm;
  }

  reset() {
    this.searchTerm = '';
  }

  get filteredCoverages() {
    return this.insuranceController.allCoverageFields.filter(({ label }) =>
      label.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  get isFilteredInsuranceListEmpty() {
    return !this.filteredCoverages.length;
  }
}

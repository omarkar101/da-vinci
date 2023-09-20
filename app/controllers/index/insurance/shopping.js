import Controller, { inject as controller } from '@ember/controller';

export default class ShoppingController extends Controller {
  @controller('index.insurance')
  insuranceController;

  get filteredInsurances() {
    return this.insuranceController.filteredInsurances;
  }
}

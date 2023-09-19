import Controller, { inject as controller } from '@ember/controller';

export default class IndexInsuranceController extends Controller {
  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = 'Insurance';
  }
}

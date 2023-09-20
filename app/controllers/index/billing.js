import Controller, { inject as controller } from '@ember/controller';

export default class IndexBillingController extends Controller {
  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = 'Billing';
  }
}

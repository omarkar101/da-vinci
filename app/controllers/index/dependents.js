import Controller, { inject as controller } from '@ember/controller';

export default class IndexDependentsController extends Controller {
  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = 'Dependents & Beneficiaries';
  }
}

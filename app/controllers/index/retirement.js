import Controller, { inject as controller } from '@ember/controller';

export default class IndexRetirementController extends Controller {
  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = 'Retirement';
  }
}

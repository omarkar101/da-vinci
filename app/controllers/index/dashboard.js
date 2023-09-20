import Controller, { inject as controller } from '@ember/controller';

export default class IndexDashboardController extends Controller {
  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = 'Dashboard';
  }
}

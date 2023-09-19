import Controller, { inject as controller } from '@ember/controller';

export default class IndexHistoryController extends Controller {
  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = 'History';
  }
}

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EmployeeInfoController extends Controller {
  @tracked
  progressValue = 20;

  @tracked
  title = 'My Details';

  @action
  changePage(progressValue, title) {
    this.progressValue = progressValue;
    this.title = title;
  }
}

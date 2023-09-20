import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class EmployeeInfoController extends Controller {
  @service
  router;

  @tracked
  progressValue = 20;

  @tracked
  title = 'My Details';

  @action
  applyChanges(progressValue, title) {
    this.progressValue = progressValue;
    this.title = title;
  }
}

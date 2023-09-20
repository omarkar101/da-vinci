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

  @tracked
  previousRoute = 'employee-info';

  @tracked
  nextRoute = 'employee-info.employment-info-setup';

  @action
  applyChanges(progressValue, title, previousRoute, nextRoute) {
    this.progressValue = progressValue;
    this.title = title;
    this.previousRoute = previousRoute;
    this.nextRoute = nextRoute;
  }
}

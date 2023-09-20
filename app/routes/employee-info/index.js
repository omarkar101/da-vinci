import Route from '@ember/routing/route';

export default class EmployeeInfoIndexRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.parentController.applyChanges(30, 'My Details', 'employee-info', 'employee-info.employment-info-setup');
  }
}

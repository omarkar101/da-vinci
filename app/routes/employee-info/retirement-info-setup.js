import Route from '@ember/routing/route';

export default class EmployeeInfoRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.parentController.applyChanges(100, 'My 401(K) Setup', 'employee-info.employment-info-setup', 'index');
  }
}

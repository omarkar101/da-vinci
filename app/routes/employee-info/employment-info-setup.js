import Route from '@ember/routing/route';

export default class EmployeeInfoRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.parentController.applyChanges(70, 'My Employment Info', 'employee-info', 'employee-info.retirement-info-setup');
  }
}

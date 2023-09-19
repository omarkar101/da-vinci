import Route from '@ember/routing/route';

export default class IndexDashboardRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.setup();
  }
}

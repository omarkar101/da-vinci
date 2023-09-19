import Route from '@ember/routing/route';

export default class IndexRetirementRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.setup();
  }
}

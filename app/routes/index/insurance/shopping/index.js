import Route from '@ember/routing/route';

export default class IndexInsuranceShoppingListRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.setup();
  }

  resetController(controller, ...rest) {
    super.resetController(controller, ...rest);
    controller.reset();
  }
}

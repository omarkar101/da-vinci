import Route from '@ember/routing/route';

export default class IndexInsuranceShoppingListRoute extends Route {
  setupController(controller, model, transition) {
    super.setupController(controller, model, transition);
    controller.setup();
  }

  async model({ insuranceType }) {
    return {
      insuranceType: insuranceType,
    };
  }
}

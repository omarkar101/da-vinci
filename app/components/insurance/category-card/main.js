import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class InsuranceCategoryCardMainComponent extends Component {
  @service
  router;

  @action
  onClick() {
    let coverageType = this.args.insurance.key;
    this.router.transitionTo('index.insurance.shopping.list', coverageType);
  }
}

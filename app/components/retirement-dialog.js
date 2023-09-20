import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RetirementDialogComponent extends Component {
  @tracked
  accountNumber = '';

  @action
  close() {
    this.args.onClose();
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class InputFieldComponent extends Component {
  @tracked
  label = this.args.label ?? '';

  @tracked
  type = this.args.type ?? 'text';

  @tracked
  placeholder = this.args.placeholder ?? '';

  @tracked
  value = this.args.value ?? '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ConfigurableButtonComponent extends Component {
  @tracked
  styleClass = this.args.styleClass ?? '';

  @tracked
  label = this.args.label ?? 'Click Me';

  @action
  onClick() {
    this.args.onClick();
  }
}

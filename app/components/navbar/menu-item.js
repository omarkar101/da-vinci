import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavbarMenuItemComponent extends Component {
  @service
  router;

  @action
  onClick(event) {
    event.preventDefault();
    this.router.transitionTo(this.args.route);
    this.args.onClick();
  }
}

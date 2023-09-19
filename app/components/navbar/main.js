import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavbarMenuComponent extends Component {
  @tracked
  isMenuOpen = false;

  @action
  onRouteChange() {
    this.isMenuOpen = false;
    console.log('test');
  }
}

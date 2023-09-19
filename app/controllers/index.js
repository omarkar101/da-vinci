import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  headerTitle = 'Dashboard';

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  myFunction() {
    let header = document.getElementById('header');
    let sticky = header.offsetTop;
    if (window.scrollY > sticky) {
      header.classList.add('header__is-sticky');
    } else {
      header.classList.remove('header__is-sticky');
    }
  }

  setup() {
    window.onscroll = () => this.myFunction();
  }
}

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service
  router;

  @tracked
  headerTitle = 'Dashboard';

  @tracked
  iconSrc = null;

  get isIconVisible() {
    return this.iconSrc !== null;
  }

  get isBackButtonVisible() {
    return this.isIconVisible;
  }

  get iconSrcString() {
    return `/assets/icons/${this.iconSrc}`;
  }

  @tracked
  searchTerm = '';

  @action
  setSearchTerm(newTerm) {
    this.searchTerm = newTerm;
  }

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

  @action
  onBackClick() {
    this.router.replaceWith('index.insurance.shopping');
    this.headerTitle = 'Insurance';
    this.iconSrc = null;
  }

  setup() {
    window.onscroll = () => this.myFunction();
  }
}

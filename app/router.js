import EmberRouter from '@ember/routing/router';
import config from 'da-vinci/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/', function () {
    this.route('dashboard');
    this.route('insurance', function () {
      this.route('shopping');
      this.route('ongoing');
    });

    this.route('dependents-and-beneficiaries', function () {
      this.route('beneficiaries');
      this.route('dependents');
    });
    this.route('billing');
    this.route('401k');
  });
});

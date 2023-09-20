import EmberRouter from '@ember/routing/router';
import config from 'da-vinci/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('signup');
  this.route('employee-info', function () {
    this.route('index', { path: '/' });
    this.route('employment-info-setup');
    this.route('retirement-info-setup');
  });
  this.route('index', { path: '/' }, function () {
    this.route('dashboard', { path: '/' });
    this.route('insurance', function () {
      this.route('shopping', function () {
        this.route('index', { path: '/' });
        this.route('list', { path: '/:insuranceType' });
      });
      this.route('ongoing');
    });

    this.route('dependents');
    this.route('billing');
    this.route('history');
    this.route('retirement');
  });
});

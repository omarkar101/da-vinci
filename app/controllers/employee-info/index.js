import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class EmployeeInfoController extends Controller {
  @controller('employee-info')
  parentController;
}

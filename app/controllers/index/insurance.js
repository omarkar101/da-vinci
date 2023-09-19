import Controller, { inject as controller } from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InsuranceController extends Controller {
  @controller('index')
  indexController;

  @tracked
  filterCategories = [
    new Category({
      key: 'shopping',
      label: 'Shopping',
      isActive: true,
    }),
    new Category({
      key: 'current',
      label: 'Current',
      isActive: false,
    }),
  ];

  @action
  changeActiveCategory(newCategory) {
    this.filterCategories.forEach(
      (category) => (category.isActive = category.key === newCategory),
    );
  }

  setup() {
    this.indexController.headerTitle = 'Insurance';
  }
}

class Category {
  @tracked
  key = null;

  @tracked
  label = null;

  @tracked
  isActive = null;

  constructor({ key, label, isActive }) {
    this.key = key;
    this.label = label;
    this.isActive = isActive;
  }
}

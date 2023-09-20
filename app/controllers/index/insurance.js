import Controller, { inject as controller } from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const INSURANCE_TYPES = [
  {
    type: 'medical',
    label: 'Medical',
    imgSrc: 'heart.svg',
    isCore: true,
  },
  {
    type: 'vision',
    label: 'Vision',
    imgSrc: 'glasses.svg',
    isCore: true,
  },
  {
    type: 'accident',
    label: 'Accident',
    imgSrc: 'warning.svg',
    isCore: true,
  },
  {
    type: 'pet',
    label: 'Pet',
    imgSrc: 'pet.svg',
    isCore: false,
  },
];

export default class InsuranceController extends Controller {
  @tracked
  searchTerm = '';

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

  get filteredInsurances() {
    return INSURANCE_TYPES.filter(({ label }) =>
      label.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  get isFilteredInsuranceListEmpty() {
    return !this.filteredInsurances.length;
  }

  @action
  setSearchTerm(newTerm) {
    this.searchTerm = newTerm;
  }

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

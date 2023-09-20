import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const CATEGORY_MAP = {
  medical: {
    label: 'Medical',
    iconSrc: 'heart.svg',
  },
  life: {
    label: 'Life',
    iconSrc: 'life.svg',
  },
  dental: {
    label: 'Dental',
    iconSrc: 'tooth.svg',
  },
  vision: {
    label: 'Vision',
    iconSrc: 'glasses.svg',
  },
  criticalIllness: {
    label: 'Critical Illness',
    iconSrc: 'virus.svg',
  },
  accident: {
    label: 'Accident',
    iconSrc: 'warning.svg',
  },
  auto: {
    label: 'Auto',
    iconSrc: 'auto.svg',
  },
  cancer: {
    label: 'Cancer',
    iconSrc: 'cancer.svg',
  },
  home: {
    label: 'Home',
    iconSrc: 'home.svg',
  },
  pet: {
    label: 'Pet',
    iconSrc: 'pet.svg',
  },
  travel: {
    label: 'Travel',
    iconSrc: 'plane.svg',
  },
  legal: {
    label: 'Legal',
    iconSrc: 'legal.svg',
  },
};

export default class InsuranceShoppingListController extends Controller {
  @tracked
  model;

  @controller('index.insurance')
  insuranceController;

  @controller('index')
  indexController;

  setup() {
    this.indexController.headerTitle = CATEGORY_MAP[this.insuranceType].label;
    this.indexController.iconSrc = CATEGORY_MAP[this.insuranceType].iconSrc;
  }

  reset() {
    this.indexController.headerIcon = null;
    this.indexController.searchTerm = '';
    this.filterCategories[0].isActive = true;
    this.filterCategories[1].isActive = false;
  }

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

  get activeCategory() {
    return this.filterCategories.find(({ isActive }) => !!isActive).key;
  }

  get searchTerm() {
    return this.indexController.searchTerm;
  }

  @action
  changeActiveCategory(newCategory) {
    this.filterCategories.forEach(
      (category) => (category.isActive = category.key === newCategory),
    );
  }

  get insuranceType() {
    return this.model.insuranceType;
  }

  get selectedCoverages() {
    return this.insuranceController.allCoverageFields.find(
      ({ key }) => key === this.insuranceType,
    ).coverages;
  }

  get coveragesToShow() {
    return this.selectedCoverages.filter(
      ({ status, name }) =>
        status === this.activeCategory &&
        name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  get hasCoveragesToShow() {
    return !!this.coveragesToShow.length;
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

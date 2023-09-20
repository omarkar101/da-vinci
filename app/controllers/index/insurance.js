import Controller, { inject as controller } from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

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

  get filteredCoverages() {
    return this.allCoverageFields.filter(({ label }) =>
      label.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  get allCoverageFields() {
    let coverageFields = [];
    for (const key of Object.keys(COVERAGES)) {
      COVERAGES[key].coverageFields.map((coverageField) =>
        coverageFields.push({
          key: coverageField.key,
          label: coverageField.label,
          type: key,
          imgSrc: coverageField.imgSrc,
          coverages: coverageField.coverages,
        }),
      );
    }
    return coverageFields;
  }

  get isFilteredInsuranceListEmpty() {
    return !this.filteredCoverages.length;
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

const COVERAGES = {
  core: {
    key: 'coreCoverage',
    label: 'Core Coverage',
    coverageFields: [
      {
        key: 'medical',
        label: 'Medical',
        imgSrc: 'heart.svg',
        coverages: [
          { name: 'Oscar' },
          { name: 'Humana' },
          { name: 'UnitedHealthCare' },
        ],
      },
      {
        key: 'life',
        label: 'Life',
        imgSrc: 'life.svg',
        coverages: [
          { name: 'Bestow' },
          { name: 'New York Life' },
          { name: 'Prudential' },
          { name: 'Northwestern Mutual' },
        ],
      },
      {
        key: 'dental',
        label: 'Dental',
        imgSrc: 'tooth.svg',
        coverages: [
          { name: 'Bestow' },
          { name: 'United Concordia' },
          { name: 'Cigna' },
        ],
      },
      {
        key: 'vision',
        label: 'Vision',
        imgSrc: 'glasses.svg',
        coverages: [
          { name: 'VSP Vision Care' },
          { name: 'EyeMed' },
          { name: 'Davis Vision' },
          { name: 'FedVIP' },
        ],
      },
    ],
  },
  additionalCore: {
    key: 'additionalCoreCoverage',
    label: 'Additional Core Coverage',
    coverageFields: [
      {
        key: 'criticalIllness',
        label: 'Critical Illness',
        imgSrc: 'virus.svg',
        coverages: [
          { name: 'Aflac' },
          { name: 'Colonial Life' },
          { name: 'MetLife' },
        ],
      },
      {
        key: 'accident',
        label: 'Accident',
        imgSrc: 'warning.svg',
        coverages: [{ name: 'Aflac' }, { name: 'MetLife' }, { name: 'Unum' }],
      },
      {
        key: 'cancer',
        label: 'Cancer',
        imgSrc: 'cancer.svg',
        coverages: [
          { name: 'Aflac' },
          { name: 'Cancer Treatment Centers' },
          { name: 'MetLife' },
        ],
      },
    ],
  },
  recommendations: {
    key: 'coverageRecommendations',
    label: 'Coverage Recommendations',
    coverageFields: [
      {
        key: 'auto',
        label: 'Auto',
        imgSrc: 'auto.svg',
        coverages: [
          { name: 'MetroMile' },
          { name: 'State Farm' },
          { name: 'Geico' },
          { name: 'Progressive' },
        ],
      },
      {
        key: 'home',
        label: 'Home',
        imgSrc: 'home.svg',
        coverages: [
          { name: 'Hippo' },
          { name: 'Allstate' },
          { name: 'State Farm' },
          { name: 'Liberty Mutual' },
        ],
      },
      {
        key: 'pet',
        label: 'Pet',
        imgSrc: 'pet.svg',
        coverages: [
          { name: 'Pumpkin' },
          { name: 'ASPCA' },
          { name: 'Figo' },
          { name: 'Spot' },
        ],
      },
      {
        key: 'travel',
        label: 'Travel',
        imgSrc: 'plane.svg',
        coverages: [
          { name: 'Spot' },
          { name: 'AIG Travel' },
          { name: 'Travelers' },
          { name: 'Allianze Global Assistance' },
        ],
      },
      {
        key: 'legal',
        label: 'Legal',
        imgSrc: 'legal.svg',
        coverages: [
          { name: 'LegalShield' },
          { name: 'Hyatt Legal' },
          { name: 'Rocket Lawyer' },
          { name: 'USLegal' },
        ],
      },
    ],
  },
};

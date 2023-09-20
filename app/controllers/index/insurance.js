import Controller, { inject as controller } from '@ember/controller';

export default class InsuranceController extends Controller {
  @controller('index')
  indexController;

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

  setup() {
    this.indexController.headerTitle = 'Insurance';
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
          { name: 'Oscar', status: 'shopping' },
          { name: 'Humana', status: 'current' },
          { name: 'UnitedHealthCare', status: 'shopping' },
        ],
      },
      {
        key: 'life',
        label: 'Life',
        imgSrc: 'life.svg',
        coverages: [
          { name: 'Bestow', status: 'shopping' },
          { name: 'New York Life', status: 'current' },
          { name: 'Prudential', status: 'current' },
          { name: 'Northwestern Mutual', status: 'shopping' },
        ],
      },
      {
        key: 'dental',
        label: 'Dental',
        imgSrc: 'tooth.svg',
        coverages: [
          { name: 'Bestow', status: 'current' },
          { name: 'United Concordia', status: 'shopping' },
          { name: 'Cigna', status: 'shopping' },
        ],
      },
      {
        key: 'vision',
        label: 'Vision',
        imgSrc: 'glasses.svg',
        coverages: [
          { name: 'VSP Vision Care', status: 'shopping' },
          { name: 'EyeMed', status: 'shopping' },
          { name: 'Davis Vision', status: 'current' },
          { name: 'FedVIP', status: 'current' },
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
          { name: 'Aflac', status: 'shopping' },
          { name: 'Colonial Life', status: 'current' },
          { name: 'MetLife', status: 'shopping' },
        ],
      },
      {
        key: 'accident',
        label: 'Accident',
        imgSrc: 'warning.svg',
        coverages: [
          { name: 'Aflac', status: 'shopping' },
          { name: 'MetLife', status: 'shopping' },
          { name: 'Unum', status: 'current' },
        ],
      },
      {
        key: 'cancer',
        label: 'Cancer',
        imgSrc: 'cancer.svg',
        coverages: [
          { name: 'Aflac', status: 'shopping' },
          { name: 'Cancer Treatment Centers', status: 'current' },
          { name: 'MetLife', status: 'shopping' },
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
          { name: 'MetroMile', status: 'shopping' },
          { name: 'State Farm', status: 'current' },
          { name: 'Geico', status: 'shopping' },
          { name: 'Progressive', status: 'shopping' },
        ],
      },
      {
        key: 'home',
        label: 'Home',
        imgSrc: 'home.svg',
        coverages: [
          { name: 'Hippo', status: 'shopping' },
          { name: 'Allstate', status: 'shopping' },
          { name: 'State Farm', status: 'shopping' },
          { name: 'Liberty Mutual', status: 'shopping' },
        ],
      },
      {
        key: 'pet',
        label: 'Pet',
        imgSrc: 'pet.svg',
        coverages: [
          { name: 'Pumpkin', status: 'current' },
          { name: 'ASPCA', status: 'shopping' },
          { name: 'Figo', status: 'shopping' },
          { name: 'Spot', status: 'shopping' },
        ],
      },
      {
        key: 'travel',
        label: 'Travel',
        imgSrc: 'plane.svg',
        coverages: [
          { name: 'Spot', status: 'shopping' },
          { name: 'AIG Travel', status: 'current' },
          { name: 'Travelers', status: 'shopping' },
          { name: 'Allianze Global Assistance', status: 'shopping' },
        ],
      },
      {
        key: 'legal',
        label: 'Legal',
        imgSrc: 'legal.svg',
        coverages: [
          { name: 'LegalShield', status: 'shopping' },
          { name: 'Hyatt Legal', status: 'shopping' },
          { name: 'Rocket Lawyer', status: 'shopping' },
          { name: 'USLegal', status: 'shopping' },
        ],
      },
    ],
  },
};

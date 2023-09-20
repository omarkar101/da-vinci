export const COVERAGE_TYPE_MAP = {
  1: 'core',
  2: 'additionalCore',
  3: 'recommended',
};

export const COVERAGES = {
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
        imgSrc: 'heart.svg',
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
        imgSrc: 'heart.svg',
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
        imgSrc: 'heart.svg',
        coverages: [
          { name: 'Aflac' },
          { name: 'Colonial Life' },
          { name: 'MetLife' },
        ],
      },
      {
        key: 'accident',
        label: 'Accident',
        imgSrc: 'heart.svg',
        coverages: [{ name: 'Aflac' }, { name: 'MetLife' }, { name: 'Unum' }],
      },
      {
        key: 'cancer',
        label: 'Cancer',
        imgSrc: 'heart.svg',
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
        imgSrc: 'heart.svg',
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
        imgSrc: 'heart.svg',
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
        imgSrc: 'heart.svg',
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
        imgSrc: 'heart.svg',
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

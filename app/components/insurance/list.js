import Component from '@glimmer/component';

export default class InsuranceListComponent extends Component {
  get insurances() {
    return [
      {
        type: 'medical',
        label: 'Medical',
        imgSrc: 'heart.svg',
        isCore: true
      },
      {
        type: 'vision',
        label: 'Vision',
        imgSrc: 'glasses.svg',
        isCore: true
      },
      {
        type: 'accident',
        label: 'Accident',
        imgSrc: 'warning.svg',
        isCore: true
      },
      {
        type: 'pet',
        label: 'Pet',
        imgSrc: 'pet.svg',
        isCore: false
      },
    ]
  }
}

import Controller, { inject as controller } from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexRetirementController extends Controller {
  @controller('index')
  indexController;

  @tracked
  showDialog = false;

  @tracked
  accounts = [
    {
      number: '356271819',
      vendor: 'Current',
      balance: '$5,000',
      color: 'color: rgba(75, 192, 192, 0.7);',
    },
    {
      number: '123456789',
      vendor: 'Vanguard',
      balance: '$5,500',
      color: 'color: rgba(255, 205, 86, 0.7);',
    },
    {
      number: '987654321',
      vendor: 'Fidelity',
      balance: '$4,800',
      color: 'color: rgba(255, 99, 132, 0.7);',
    },
    {
      number: '624792391',
      vendor: 'Empower Retirement',
      balance: '$5,200',
      color: 'color: rgba(54, 162, 235, 0.7);',
    },
  ];

  @action
  openDialog() {
    this.showDialog = true;
  }

  @action
  closeDialog() {
    this.showDialog = false;
  }

  setup() {
    this.indexController.headerTitle = 'Retirement';
  }
}

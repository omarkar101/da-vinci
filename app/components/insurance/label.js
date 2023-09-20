import Component from '@glimmer/component';

export default class LabelComponent extends Component {
  get colorKey() {
    switch (this.args.type) {
      case 'core':
        return 'blue';
      case 'recommendations':
        return 'purple';
      case 'additionalCore':
        return 'green';
      default:
        return '';
    }
  }
  get colorModifier() {
    return `label-color-${this.colorKey}`;
  }

  get label() {
    switch (this.args.type) {
      case 'core':
        return 'Core';
      case 'recommendations':
        return 'For You';
      case 'additionalCore':
        return 'Core+';
      default:
        return '';
    }
  }
}

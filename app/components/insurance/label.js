import Component from '@glimmer/component';

export default class LabelComponent extends Component {
  get colorKey() {
    return this.args.isCore ? 'blue' : 'purple';
  }
  get colorModifier() {
    return `label-color-${this.colorKey}`;
  }

  get label() {
    return this.args.isCore ? 'Core' : 'For You';
  }
}

import {Component, h, Prop, State, Watch,} from "@stencil/core";


@Component({
  tag: 'ft-box',
  styleUrl: './feature-box.scss',
  shadow: true
})


export class featureBox {

  @Prop({mutable: true, reflect: true}) title: string;
  @Prop({mutable: true, reflect: true}) cardColor: string;
  @State() color: string;

  @Watch('cardColor')
  cardColorChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.color = newValue;
    }
  }

  componentWillLoad() {
    if (this.cardColor) {
      this.color = this.cardColor;
    }
  }

  render() {
    return [
      <div class={`feature-box feature-box--${this.color}`}>
        <i class="fas fa-cloud"></i>
        <h3 class="heading-tertiary u-margin-bottom-small">{this.title}</h3>
        <slot name='p'/>
      </div>
    ];
  }
}

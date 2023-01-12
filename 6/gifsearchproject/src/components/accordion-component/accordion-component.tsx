import {Component, h, Prop,} from "@stencil/core";


@Component({
  tag: 'accordion-component',
  styleUrl: './accordion-component.scss',
  shadow: true
})


export class accordionComponent {
  @Prop({mutable: true, reflect: true}) backgroundColor: string;
  @Prop({mutable: true, reflect: true}) hoverBackgroundColor: string;
  @Prop({mutable: true, reflect: true}) itemHead: string;
  render() {
    return [
      <div class="tab">
        <input type="checkbox" id="chck1"/>
        <label class={`tab__label tab__label--${this.backgroundColor}`} htmlFor="chck1">{this.itemHead}</label>
        <div class="tab__content">
          <slot name='p'/>
        </div>
      </div>
    ];
  }
}

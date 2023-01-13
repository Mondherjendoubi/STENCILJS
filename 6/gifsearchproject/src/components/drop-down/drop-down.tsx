import {Component, h, Prop} from "@stencil/core";


@Component({
  tag: 'drop-down',
  styleUrl: './drop-down.scss',
  shadow: true
})


export class dropDown {
  @Prop({mutable: true, reflect: true}) backgroundColor: string;

  render() {
    return [
      <div class="dropdown">
        <input type="checkbox" id="chck1"/>
        <label class={`dropdown__label dropdown__label--${this.backgroundColor}`} htmlFor="chck1">
          <slot name="Title"/>
        </label>
        <div class="dropdown__content">
          <slot/>
        </div>
      </div>
    ];
  }
}

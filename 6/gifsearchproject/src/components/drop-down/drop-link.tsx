import {Component, h, Prop} from "@stencil/core";


@Component({
  tag: 'drop-link',
  styleUrl: './drop-link.scss',
  shadow: true
})


export class dropLink {
  @Prop({mutable: true, reflect: true}) backgroundColor: string;


  render() {
    return [
      <a class="link" href="#">
        <slot/>
      </a>
    ];
  }
}

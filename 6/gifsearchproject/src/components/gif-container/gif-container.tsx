import {Component, h, Prop,} from "@stencil/core";


@Component({
  tag: 'gif-comp',
  styleUrl: './gif-container.scss',
  shadow: true
})


export class gifContainer {
  @Prop({mutable: true, reflect: true}) url: string;

  render() {
    return [
      <div class="item-1">
        <img src={this.url} alt="logo" class="logo"/>
      </div>
    ];
  }
}

import {Component, h} from "@stencil/core";


@Component({
  tag: 'head-item',
  styleUrl: './head-item.scss',
  shadow: true
})


export class headItem {
  render() {
    return [
      <button  class="btn-text"><slot/></button>
    ];
  }
}

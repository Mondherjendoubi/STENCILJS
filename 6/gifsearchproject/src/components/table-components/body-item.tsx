import {Component, h} from "@stencil/core";


@Component({
  tag: 'body-item',
  styleUrl: './body-item.scss',
  shadow: true
})


export class headItem {
  render() {
    return [
      <div class="container">
        <h3><slot/></h3>
      </div>
    ];
  }
}

import {Component, h,} from "@stencil/core";


@Component({
  tag: 'table-comp',
  styleUrl: './table.scss',
  shadow: true
})


export class table {

  render() {
    return [
    <div class="table">
        <slot/>
    </div>
    ];
  }
}

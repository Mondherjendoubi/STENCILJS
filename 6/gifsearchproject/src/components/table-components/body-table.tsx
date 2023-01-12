import {Component, h, Prop} from "@stencil/core";


@Component({
  tag: 'body-table',
  styleUrl: './body-table.scss',
  shadow: true
})
export class bodyTable {

  @Prop({mutable: true, reflect: true}) numberColumn: number;

  render() {
    if (this.numberColumn) {
      console.log(this.numberColumn + "numbColum");
      var indents = [];
      for (var i = 0; i < this.numberColumn; i++) {
        indents.push(<div class={`col-1-of-4`}>
          <slot name={`col-${i+1}`}/>
        </div>);
      }
    }
    console.log(JSON.stringify(indents) + "array");

    return [
      <div class="body-container">
        {indents}
      </div>
    ];
  }
}

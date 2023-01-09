import {Component, h, Prop, Watch,} from "@stencil/core";


@Component({
  tag: 'grid-comp',
  styleUrl: './grid-comp.scss',
  shadow: true
})


export class gridComp {
  @Prop({mutable: true, reflect: true}) columnType: string;

  @Watch('columnType')
  searchSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      console.log(newValue + " " + oldValue);
    }
  }

  render() {
    /* let dataContent;
     if (this.columnType === "col-1-of-4") {
       dataContent = "<div class=\"col-1-of-4\">\n" +
         "          <h1>Hello world</h1>\n" +
         "        </div>";

     }*/
    return [
      <div class="row">
        <div class="col-1-of-4">
          <slot name='col-1'/>
        </div>
        <div class="col-1-of-4">
          <slot name='col-2'/>
        </div>
        <div class="col-1-of-4">
          <slot name='col-3'/>
        </div>
        <div class="col-1-of-4">
          <slot name='col-4'/>
        </div>
      </div>
    ];
  }
}

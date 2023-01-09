import {Component, h, Prop, State, Watch,} from "@stencil/core";


@Component({
  tag: 'btn-exp',
  styleUrl: './button-example.scss',
  shadow: true
})


export class buttonExample {

  @Prop({mutable: true, reflect: true}) content: string;
  @Prop({mutable: true, reflect: true}) colorButton: string;
  @Prop({mutable: true, reflect: true}) fontColor: string;
  @State() colorInput: string;
  @State() fontColorInput: string;

  @Watch('colorButton')
  colorButtonChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.colorInput = newValue;
    }
  }

  @Watch('fontColor')
  fontColorInputChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.fontColorInput = newValue;
    }
  }

  componentWillLoad() {
    if (this.colorButton) {
      this.colorInput = this.colorButton;
      this.fontColorInput = this.fontColor;
    }
  }

  render() {
    return [
      <a href="#"
         class={`btn btn--color btn--animated btn--color--${this.colorInput} btn--color--${this.colorInput}--${this.fontColorInput}`}>{this.content}</a>
    ];
  }
}

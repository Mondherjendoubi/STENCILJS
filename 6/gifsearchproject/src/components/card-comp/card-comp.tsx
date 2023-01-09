import {Component, h, Prop, State, Watch,} from "@stencil/core";


@Component({
  tag: 'card-comp',
  styleUrl: './card-comp.scss',
  shadow: true
})


export class cardComponent {

  @Prop({mutable: true, reflect: true}) url: string;
  @Prop({mutable: true, reflect: true}) title: string;
  @Prop({mutable: true, reflect: true}) price: string;
  @Prop({mutable: true, reflect: true}) cardFrontColor: string;
  @Prop({mutable: true, reflect: true}) cardBackColor: string;
  @Prop({mutable: true, reflect: true}) spanColorInput: string;
  @Prop({mutable: true, reflect: true}) cardBackButtonColor: string;
  @Prop({mutable: true, reflect: true}) cardBackButtonColorFont: string;
  @State() colorFront: string;
  @State() colorBack: string;
  @State() colorSpan: string;
  @State() cardBackButtonColorInput: string;
  @State() cardBackButtonColorFontInput: string;

  @Watch('cardBackButtonColor')
  cardBackButtonColorChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.cardBackButtonColorInput = newValue;
    }
  }

  @Watch('cardBackButtonColorFont')
  cardBackButtonColorFontChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.cardBackButtonColorFontInput = newValue;
    }
  }


  @Watch('cardFrontColor')
  spanColorInputChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.colorSpan = newValue;
      console.log(this.colorFront + "new Color in watch");
    }
  }

  @Watch('cardFrontColor')
  cardFrontColorChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.colorFront = newValue;
      console.log(this.colorFront + "new Color in watch");
    }
  }

  @Watch('cardBackColor')
  cardBackColorChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.colorBack = newValue;
      console.log(this.colorFront + "new Color in watch");
    }
  }

  componentWillLoad() {
    console.log("componenet will load");
    console.log(this.cardFrontColor);
    if (this.cardFrontColor) {
      this.colorFront = this.cardFrontColor;
      this.colorBack = this.cardBackColor;
      this.colorSpan = this.spanColorInput;
      this.cardBackButtonColorInput = this.cardBackButtonColor;
      this.cardBackButtonColorFontInput = this.cardBackButtonColorFont;
      console.log(this.colorFront + "componentWillLoad");

    }
  }

  hostData() {
    return {class: this.cardFrontColor ? 'hydrated ' : `hydrated ${this.cardFrontColor}`}
  }


  render() {
    return [
      <div class="card">
        <div class={`card__side card__side--front card__side--front--${this.colorFront}`}>
          <div class="card__picture card__picture--1">
            <img src={this.url}/>
          </div>
          <h4 class="card__heading">
                                <span class={`card__heading-span card__heading-span--${this.colorSpan}`}>
                                    {this.title}
                                </span>
          </h4>
          <div class="card__details">
            <slot name='p'/>
          </div>
        </div>
        <div class={`card__side card__side--back card__side--back--${this.colorBack}`}>
          <div class="card__cta">
            <div class="card__price-box">
              <p class="card__price-only">Only</p>
              <p class="card__price-value">${this.price}</p>
            </div>
            <btn-exp
              color-button={this.cardBackButtonColorInput}
              font-color={this.cardBackButtonColorFont}
              content="Button"></btn-exp>
          </div>
        </div>
      </div>
    ];
  }
}

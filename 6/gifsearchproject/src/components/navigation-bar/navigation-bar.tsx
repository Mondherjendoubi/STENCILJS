import {Component, Event, EventEmitter, h, Prop,} from "@stencil/core";


@Component({
  tag: 'nav-comp',
  styleUrl: './navigation-bar.scss',
  shadow: true
})


export class navigationBar {
  @Prop({mutable: true, reflect: true}) url: string;
  @Event({bubbles: true, composed: true}) navSelected: EventEmitter<string>;


  onSelectNav(symbol: string) {
    this.navSelected.emit(symbol);
  }

  render() {
    return [
      <div class="nav-container">
        <div class="logo-box">
          <img src="https://cliply.co/wp-content/uploads/2021/02/372102690_TIKTOK_LOGO_400.gif" alt="logo"
               class="logo"/>
        </div>
        <button class="link-item" onClick={this.onSelectNav.bind(this, "trending")}>trending</button>
        <button class="link-item" onClick={this.onSelectNav.bind(this, "Random")}>Random</button>
        <button class="link-item" onClick={this.onSelectNav.bind(this, "New")}>New</button>

      </div>
    ];
  }
}

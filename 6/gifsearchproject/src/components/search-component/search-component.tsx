import {Component, h, Prop, State, Watch} from "@stencil/core";
import {AV_API_KEY} from '../global/global';

@Component({
  tag: 'sr-comp',
  styleUrl: './search-component.scss',
  shadow: true
})


export class searchGif {
  @State() searchInput: string;
  @State() idSymbol: string;
  @State() searchInputValid = false;
  @Prop({mutable: true, reflect: true}) searchSymbol: string;
  @Prop({mutable: true, reflect: true}) navSelected: string;
  @State() gifArray: Array<string>;

  @Watch('searchSymbol')
  searchSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.searchInput = newValue;
      this.fetchGifWithUrl(newValue);
    }
  }

  @Watch('navSelected')
  navSelectedChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.searchInput = newValue;
      this.fetchGifWithUrl(newValue);
    }
  }


  fetchGifWithUrl(searchInput: String) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${AV_API_KEY}&q=${searchInput}&limit=4&offset=0&rating=g&lang=en`).then((response) => {
      return response.json();
    }).then((parsedResponse) => {
      this.gifArray = parsedResponse['data'].map(match => {
        return {url: `https://media.giphy.com/media/${match['id']}/giphy.gif`};
      });
    }).catch((err) => {
      console.log(err);
    });

  }

  onFetchGif(event: Event) {
    event.preventDefault();
    this.idSymbol = this.searchInput;
    this.fetchGifWithUrl(this.idSymbol);
  }

  componentDidLoad() {
    if (this.searchSymbol) {
      //this.initialStockSockSymbol=this.stockSymbol;
      this.idSymbol = this.searchSymbol;
      this.searchInputValid = true;
      this.fetchGifWithUrl(this.idSymbol);
    }
  }

  componentWillLoad() {
    console.log("componenet will load");
    console.log(this.searchSymbol);
    if (this.searchSymbol) {
      this.searchInput = this.searchSymbol;
      //this.initialStockSockSymbol=this.stockSymbol;
      this.idSymbol = this.searchSymbol;
      this.searchInputValid = true;
      this.fetchGifWithUrl(this.idSymbol);
    }
  }

  updateUserInput(event: Event) {
    this.searchInput = (event.target as HTMLInputElement).value;
    if (this.searchInput.trim() !== '') {
      this.searchInputValid = true;
    } else {
      this.searchInputValid = false;
    }
  }

  hostData() {
    return {class: !this.searchInputValid ? 'hydrated invalid' : 'hydrated'}
  }

  render() {
    let dataContent;
    let index = 0;
    if (this.gifArray) {
      console.log(JSON.stringify(this.gifArray) + "  ");
      dataContent = this.gifArray.map((result) => (
        <img slot={`col-${++index}`} src={result['url']} alt="logo" class={`logo logo--${index}`}/>
      ));

    }
    return [
      <header class="header">
        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">Giphy</span>
          </h1>
        </div>
        <form id="sr-form" onSubmit={this.onFetchGif.bind(this)}>
          <input id="sr-input"
                 value={this.searchInput}
                 onInput={this.updateUserInput.bind(this)}
          />
          <button id="sr-button" type="submit" disabled={!this.searchInputValid}>Fetch</button>
        </form>
      </header>,
      <main>
        <grid-comp columnType="col-1-of-4">
          {dataContent}
        </grid-comp>
      </main>


    ]
  }
}

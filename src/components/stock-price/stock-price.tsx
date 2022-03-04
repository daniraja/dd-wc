import { Component, h, State, Element, Prop, Listen } from '@stencil/core';
import { StockService } from '../../services/stock.service';
const stockService = new StockService();
@Component({
  tag: 'wc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true,
})
export class StockPrice {
  @Element() el: HTMLElement;
  symbol: HTMLInputElement;
  @State() rate: number = 0;
  @State() userInput = '';
  @State() validInput = false;
  @State() showError = false;
  @State() loading = false;

  @Prop({ reflect: true, mutable: true }) alertShow: any;
  @Prop({ reflect: true, mutable: true }) alertMsg: any;
  @Prop({ reflect: true, mutable: true }) alertHeading: any;
  @Prop({ reflect: true, mutable: true }) alertType: any;

  @Listen('wcSelectedSymbol', { target: 'body' })
  onSelectedSymbol(e: CustomEvent) {
    if (e.detail) {
      this.userInput = e.detail;
      this.fetchPrice(e.detail);
    }
  }
  hostData() {
    return { class: this.showError ? 'error' : '' };
  }

  onUserInput(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    this.validInput = this.userInput.trim() !== '';
  }

  showAlert(type: any, message: string, heading: string) {
    console.log({ ...arguments });
    this.alertShow = true;
    this.alertHeading = heading;
    this.alertMsg = message;
    this.alertType = type;
  }

  onFetch(event: Event) {
    event.preventDefault();
    // let symbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    const symbol = this.symbol.value;
    console.log('Submitted!');
    this.fetchPrice(symbol);
  }

  fetchPrice(symbol: string) {
    this.validInput = true;
    this.showError = false;
    this.loading = true;
    stockService
      .getStockPrice(symbol)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes['Global Quote']['05. price']) {
          throw 'Please enter a valid symbol!';
        }
        this.rate = +parsedRes['Global Quote']['05. price'];
      })
      .catch(err => {
        this.showError = true;
        this.showAlert('error', err, 'Oops');
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  render() {
    return [
      <wc-alert show={this.alertShow} heading={this.alertHeading} message={this.alertMsg} type={this.alertType}></wc-alert>,
      <form onSubmit={this.onFetch.bind(this)}>
        <input autocomplete="off" id="stock-symbol" ref={el => (this.symbol = el)} value={this.userInput} onInput={this.onUserInput.bind(this)} />
        <button type="submit" disabled={!this.validInput || this.loading}>
          Fetch
        </button>
      </form>,
      <div>
        <p class="font-bold text-purple-800">Price: $ {this.rate}</p>
      </div>,
      
    ];
  }
}

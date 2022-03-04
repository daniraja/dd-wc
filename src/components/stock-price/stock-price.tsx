import { Component, h, State, Element } from '@stencil/core';

const AV = '134WWTZ9MJRO0HHW';

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

  onUserInput(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    this.validInput = this.userInput.trim() !== '';
  }

  onFetchStock(event: Event) {
    event.preventDefault();
    // let symbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    const symbol = this.symbol.value;
    console.log('Submitted!');
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${AV}`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        console.log(parsedRes);
        this.rate = +parsedRes['Global Quote']['05. price'];
      })
      .catch(err => {
        console.error(err)
      });
  }

  render() {
    return [
      <form onSubmit={this.onFetchStock.bind(this)}>
        <input id="stock-symbol" ref={el => (this.symbol = el)} 
          value={this.userInput} onInput={this.onUserInput.bind(this)} />
        <button type="submit" disabled={!this.validInput}>
          Fetch
        </button>
      </form>,
      <div>
        <p>Price: $ {this.rate}</p>
      </div>,
    ];
  }
}

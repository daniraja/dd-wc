import { Component, Event, EventEmitter, h, State } from '@stencil/core';
import { StockService } from '../../services/stock.service';
const stockService = new StockService();

@Component({
  tag: 'wc-stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true,
})
export class StockFinder {
  stockNameInput: HTMLInputElement;
  keywords: HTMLInputElement;
  @State() userInput = '';
  @State() validInput = false;
  @State() searchResult: { symbol: SVGStringList; name: string }[] = [];
  @Event({ bubbles: true, composed: true }) wcSelectedSymbol: EventEmitter<string>;

  onUserInput(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    this.validInput = this.userInput.trim() !== '';
  }

  onFind(e: Event) {
    e.preventDefault();
    this.findStock(this.userInput);
  }

  findStock(keywords: string) {
    stockService
      .getSearchKeywords(keywords)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        console.log(parsedRes);
        this.showResult(parsedRes['bestMatches']);
      })
      .catch(err => {
        console.error(err);
      });
  }

  showResult(results) {
    this.searchResult = results.map(data => {
      return { symbol: data['1. symbol'], name: data['2. name'] };
    });
  }

  onSelectSymbol(symbol: string) {
    this.wcSelectedSymbol.emit(symbol)
  }

  render() {
    return [
      <form onSubmit={this.onFind.bind(this)}>
        <input id="keywords" ref={el => (this.stockNameInput = el)} 
        onChange={this.onUserInput.bind(this)} />
        <button type="submit" disabled={!this.validInput}>Find</button>
      </form>,
      <ul class="m-0 p-0 list-none">
        {this.searchResult.map(result => (
          <li class="my-2 p-2 border border-solid rounded border-purple-400 text-purple-600 cursor-pointer flex justify-between" 
          onClick={this.onSelectSymbol.bind(this, result.symbol)}>
            <span class="font-bold text-purple-800">{result.symbol}</span><span>{result.name}</span>
          </li>
        ))}
      </ul>,
    ];
  }
}

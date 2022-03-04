import { EndPoints } from './endpoints';

export class StockService {
  getStockPrice(symbol: string) {
    return fetch(EndPoints.AV_GLOBAL_QUOTE.replace(`{symbol}`, symbol));
  }
  getSearchKeywords(keywords: string) {
    return fetch(EndPoints.AV_SYMBOL_SEARCH.replace(`{keywords}`, keywords));
  }
}

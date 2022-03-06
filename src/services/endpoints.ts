//use your api key
const AV_KEY = `134WWTZ9MJRO0HHW`;
const AV_BaseURL = `https://www.alphavantage.co/query?function=`;
const EndPoints = {
  AV_GLOBAL_QUOTE: `${AV_BaseURL}GLOBAL_QUOTE&symbol={symbol}&apikey=${AV_KEY}`,
  AV_SYMBOL_SEARCH: `${AV_BaseURL}SYMBOL_SEARCH&keywords={keywords}&apikey=${AV_KEY}`,
};

export { EndPoints };

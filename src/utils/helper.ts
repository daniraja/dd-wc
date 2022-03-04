//use your api key
const AV_KEY = 'demo';

const EndPoints = {
  AV_GLOBAL_QUOTE: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey=${AV_KEY}`,
};

export { EndPoints };

const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.goodreads.com/quotes/tag/science";

const quotes = [];

const res = axios(url)
  .then((res) => {
    let html = res.data;
    const page = cheerio.load(html);
    const data = page(".quoteText").text();
    quotes.push(data);
  })
  .catch(console.error);

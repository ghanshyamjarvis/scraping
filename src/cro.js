//Example for Scraping from the web browers and create xlsx 

const puppeteer = require('puppeteer');
const xlsx = require('xlsx');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.amazon.in/s?k=mobile&rh=n%3A1389401031&ref=nb_sb_noss')
  
  const MobileName = await page.$$eval('h2 a span', Mobile => Mobile.map(m => m.textContent))
  const Price = await page.$$eval('.a-price-whole', price => price.map(p => p.textContent))
  
  //console.log("Mobile Model===>",MobileName)
  //console.log("Price===>", Price)
  
  const Product = MobileName.map(l => [l] );
  const Product_Price = Price.map(l => [l] );

  const main = [Product, Product_Price]

  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.aoa_to_sheet(main);
  xlsx.utils.book_append_sheet(wb,ws);
  xlsx.writeFile(wb,"links.xlsx") 
  
 // console.log(links)

 await browser.close();
})();


//https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial
//pending above Urls
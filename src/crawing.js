// Write Javascript code here 
const request = require('request'); 
const cheerio = require('cheerio'); 
const fs = require('fs');
const xlsx = require('xlsx');


const URL = "https://www.amazon.in/s?k=mobile&rh=n%3A1389401031&ref=nb_sb_noss"; 


request(URL, function (err, res, body) { 
	if(err) 
	{ 
		console.log(err); 
	} 
	else
	{ 
		const arr = [];
		const Header =["Name", "Price"];
		arr.push(Header); 
		// const Product_Price =[]
		// const Product = []


		let $ = cheerio.load(body);
		$('.s-result-item').each(function(index){ 

			
			const Name = $(this).find('h2 a span').text(); 
			//console.log("data",Name)

			const price = $(this).find('div .sg-row .a-row a span .a-price-whole').text(); 
			//console.log("data",price)

			const newArray = [];

			if (Name == '' && price == '') {
				console.log('sss')
			}else{
				newArray.push(Name)
				newArray.push(price)
			}
			
			/*Product.push(Name)
			Product_Price.push(price)*/
			
			/*const obj = { 
				Product : data, 
				Price : name 
			}; */

			//console.log(obj); 
			arr.push(newArray);
		}); 

		// console.log(arr)
		// const main = [Product, Product_Price]

		const wb = xlsx.utils.book_new();
		const ws = xlsx.utils.aoa_to_sheet(arr);
		xlsx.utils.book_append_sheet(wb,ws);
		xlsx.writeFile(wb,"todaylinks.xlsx") 

		//console.log(arr.toString()); 
		/*fs.writeFile('mobile.txt', arr, function (err) { 
			if(err) { 
				console.log(err); 
			} 
			else{ 
				console.log("success"); 
			} 
		}); */

	} 
}); 

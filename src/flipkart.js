// Write Javascript code here 
const request = require('request'); 
const cheerio = require('cheerio'); 
const fs = require('fs');
const xlsx = require('xlsx');


const URL = "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"; 

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

		let $ = cheerio.load(body);
		$('div ._1HmYoV').each(function(index){ 

		const Name = $(this).find('div .bhgxx2 div ._2LFGJH ._2mylT6').text();
		console.log("Name==>",Name)

		const Price = $(this).find('div ._3O0U0u .IIdQZO ._2LFGJH ._2W-UZw ._1vC4OE').text();
		console.log("Price==>",Price)
		
		const newArray = [];

		newArray.push(Name);
		newArray.push(Price);

		//console.log(newArray);
		arr.push(newArray);
	}); 
		const wb = xlsx.utils.book_new();
		const ws = xlsx.utils.aoa_to_sheet(arr);
		xlsx.utils.book_append_sheet(wb,ws);
		xlsx.writeFile(wb,"shyam.xlsx") 

	} 
}); 

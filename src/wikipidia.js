const cheerio = require('cheerio');
const xlsx = require('xlsx');
const fs = require('fs');
const request = require('request');


const url ="https://en.wikipedia.org/wiki/List_of_districts_of_Gujarat";
 
 request(url,function (err, res, body) {
 	if (err) {
 		console.log(err)
 	}else{
 		const finalArray = [];
 		const Head =["District"];
 		finalArray.push(Head);
 		//console.log(finalArray) 

 		let $ =cheerio.load(body);
 		$('div .mw-content-ltr').each(function(index){

 			
 			//let tablehead = $(this).find('.wikitable thead tr ');
 			//console.log(tablehead)

 			let table = $(this).find('.wikitable tbody tr td').text();
 			console.log(table)
			
			let subDistrict = $(this).find('table ul li .mw-redirect').text();
 		 	console.log(subDistrict)


 			var newArray = [];
 			//newArray.push(Central_Gujarat);
 			newArray.push(subDistrict)
 			newArray.push(table)

 			//console.log(newArray)
 			finalArray.push(newArray)
 			//console.log(finalArray)
 		}) 

 		const wb = xlsx.utils.book_new();
		const ws = xlsx.utils.aoa_to_sheet(finalArray);
		xlsx.utils.book_append_sheet(wb,ws);
		xlsx.writeFile(wb,"ki.xlsx")
 	}
 })

const request = require('request'); 
const cheerio = require('cheerio'); 
const fs = require('fs');
const xlsx = require('xlsx');

const URL = "https://www.firstcry.com/clothes-and-shoes/6/0/0?gender=boy,unisex&sort=bestseller&ref2=menu_dd_catlanding"; 

request(URL, function (err, res, body) { 
	if(err) 
	{ 
		console.log(err); 
	} 
	else
	{ 
		const arr = [];
		const Header =["Product_Name","Product_Details_link","Price"];
		arr.push(Header); 

		let $ = cheerio.load(body);
		$('div #maindiv').each(function(index){ 

			

			const Product_Name = $(this).find('div .list_block .li_txt1 a').attr('title'); 
			const Product_Details_link = $(this).find('div .list_block .rupee span a').attr('href')
			const Price = $(this).find('div .lblock .rupee a').text()
			 const Data = []
			 Data.push(Product_Name);
			 Data.push(Product_Details_link);
			 Data.push(Price);

			 arr.push(Data);
		}); 

	 	const wb = xlsx.utils.book_new();
	 	const ws = xlsx.utils.aoa_to_sheet(arr);
	 	xlsx.utils.book_append_sheet(wb,ws);
	 	xlsx.writeFile(wb,"firstcry_tees.xlsx") //stroe data to new file
		
	// //Fetch Data From xlsx 	
	// var workbook = xlsx.readFile('newxlsxdata.xlsx');
	// var sheet_name_list = workbook.SheetNames;
	// var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);


	 console.log(arr);
} 
}); 

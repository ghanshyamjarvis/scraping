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
		const Header =["Name","Url","Price"];
		arr.push(Header); 

		let $ = cheerio.load(body);
		$('div .s-result-item').each(function(index){ 

			const Name = $(this).find('h2 a span').text(); 

			const Urls = $(this).find('div .a-section .a-spacing-none h2 .a-link-normal').attr("href")
			
			const price = $(this).find('div .sg-row .a-row a span .a-price-whole').text(); 

			const Data = []
			Data.push(Name);
			Data.push(Urls);
			Data.push(price);

			arr.push(Data);
		}); 

		const wb = xlsx.utils.book_new();
		const ws = xlsx.utils.aoa_to_sheet(arr);
		xlsx.utils.book_append_sheet(wb,ws);
		xlsx.writeFile(wb,"urlandnameandprice.xlsx") 
	
	//Fetch Data From xlsx 	
	var workbook = xlsx.readFile('urlandname.xlsx');
	var sheet_name_list = workbook.SheetNames;
	var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);


console.log(xlData);



	} 
}); 

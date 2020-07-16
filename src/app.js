 const express = require('express');
 const router = express.Router;
 const app = express();
 const xlsx = require('xlsx');

 
 app.get('/',(req,res)=>{

 	let workbook = xlsx.readFile('urlandnameandprice.xlsx');
 	let sheet_name_list = workbook.SheetNames;
	let xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); //json
	//DATA EXPORTING METHOD
	//const ws = sheet_to_json 		//converts a worksheet object to an array of JSON objects.
	//const ws = sheet_to_csv 			//generates delimiter-separated-values output.
	//const ws = sheet_to_txt 			//generates UTF16 formatted text.
	//const ws = sheet_to_html 		//generates HTML output.
	//const ws = sheet_to_formulae 	//generates a list of the formulae (with value fallbacks).

	//console.log(xlData)
	let Header = ["Name","Url","Price"]
	// finalarr.push();
	
	let urlaoa = xlData.map(obj => {return [obj.Name, obj.Url, obj.Price]});
	//console.log(finalarr)
	//console.log(urlaoa)
	
	
	urlaoa.unshift(Header)
	//console.log(finalarr)

	const wb = xlsx.utils.book_new();
	const ws = xlsx.utils.aoa_to_sheet(urlaoa);

	//aoa_to_sheet converts an array of arrays of JS data to a worksheet.
	//json_to_sheet converts an array of JS objects to a worksheet.
	//table_to_sheet converts a DOM TABLE element to a worksheet.
	//sheet_add_aoa adds an array of arrays of JS data to an existing worksheet.
	//sheet_add_json adds an array of JS objects to an existing worksheet.
	
	console.log(urlaoa)
	
	xlsx.utils.book_append_sheet(wb,ws);
	xlsx.writeFile(wb,"final.xlsx") 

})




 module.exports = app

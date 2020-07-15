const url = require('url');


const reqUrl =("https://www.amazon.in/s?k=mobile&rh=n%3A1389401031&ref=nb_sb_noss");

const urlObject =url.parse(reqUrl, true);

console.log(urlObject.host);     //www.amazon.in
console.log(urlObject.pathname); // /s  //directory Name where file is save
console.log(urlObject.search);   // ?k=mobile&rh=n%3A1389401031&ref=nb_sb_noss //query string


const DatafromQurey = urlObject.query

console.log(DatafromQurey); //[Object: null prototype] { k: 'mobile', rh: 'n:1389401031', ref: 'nb_sb_noss' }
console.log(DatafromQurey.k) //key of the Object //value of the key mobile
console.log(DatafromQurey.rh) //n:1389401031
console.log(DatafromQurey.ref) //nb_sb_noss	


const xlsx = require('xlsx')

var workbook = xlsx.readFile('urlandname.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

console.log(xlData);



/*const https = require('https');
const url = require('url');
const fs = require('fs');

const server = https.createServer((req,res)=>{

	const urlObject =url.parse(reqUrl, true);
	const fileName = "." + urlObject.pathname

	fs.readFile(fileName, function (err, data) {
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	})

})

server.listen(4000,()=>{
	console.log('Server Connected to port 4000')
})
*/






const xlsx = require('xlsx')

var workbook = xlsx.readFile('urlandname.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); //



const arr =["Name","Url","Price"];
let covertaoa = xlData.map(obj => Object.values(obj)); //convert into array of array
arr.push(covertaoa)
//console.log(covertaoa)

const wb = xlsx.utils.book_new();
const ws = xlsx.utils.aoa_to_sheet(covertaoa);
xlsx.utils.book_append_sheet(wb,ws);
xlsx.writeFile(wb,"ram.xlsx")



//const data =xlsx.readFile('links.xlsx');
//console.log(data.SheetNames)
//const sheet = data.SheetNames;
//console.log(sheet)
//var xlData = xlsx.utils.sheet_to_json(data.Sheets[sheet[0]]);
//console.log(xlData);

//let covertaoa = xlData.map(obj => Object.values(obj)); //convert into array of array
//console.log(covertaoa)

// let covertaoa = xlData.map(obj => Object.values(obj));
// var str =(covertaoa[4][0]); //convert to single string
// console.log(str) //
// var specification = str.split("(")[1].split(")")[0] //saprate by () 
// console.log(bracketsplit) //Ocean Blue, 2GB RAM, 32GB Storage
// var str2 = bracketsplit.split(",")[0] //saprate by comma //Ocean Blue
// console.log(specification)


//const xlData = xlsx.utils.sheet_to_txt(data.Sheets[sheet]); //for text
//const xlData = xlsx.utils.sheet_to_html(data.Sheets[sheet]); //for html format addeding tags
//const xlData = xlsx.utils.sheet_to_formulae(data.Sheets[sheet]); //in format of cell and column
//const xlData = xlsx.utils.sheet_to_csv(data.Sheets[sheet]);
//console.log(xlData);


//https://stackoverflow.com/questions/28860728/reading-excel-file-using-node-js
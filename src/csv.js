const xlsx = require('xlsx')

var workbook = xlsx.readFile('annual.csv');
var sheet_name_list = workbook.SheetNames;
var csvData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); //


let Header = ["Year","Industry_aggregation_NZSIOC","Value"]

//let fetchdata = csvData.map(obj=> Object.values(obj)) //convert aoa
let fetchdata = csvData.map(obj => {return [obj.Year, obj.Industry_aggregation_NZSIOC, obj.Value]});

fetchdata.unshift(Header)

const wb =xlsx.utils.book_new();
const ws = xlsx.utils.aoa_to_sheet(fetchdata);
xlsx.utils.book_append_sheet(wb,ws);
xlsx.writeFile(wb,'Industry_values.xlsx')

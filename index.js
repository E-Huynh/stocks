//Parameters
const key = 'pk_e14d60317e2444c9b6cbec025b78feda'
// let stockStr = 'AAPL'
let symbolArr = ['TSLA', 'AAPL', 'FB']


//Jquery targets
const symbol = $(".symbol");
const body = $(".symbol-info");

//call fx
getStock(key);

//Functions
function getStock(APIkey) {
    const stockStr = parameterStr(symbolArr);
    console.log("stockStr: ", stockStr);
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${ stockStr }&types=quote&token=${ APIkey }`,
        method: 'GET'
    }).then(function(response) {
        console.log("API response: ", response);
    })
};


function parameterStr(array) {
    let finalStr = array.toString();
    return finalStr;
}

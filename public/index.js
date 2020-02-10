//Parameters
const key = 'Tpk_34cea288c0494864ae04a08d5ad02dc2'
//Jquery targets
const $symbolSearch = $("#symbolSearch");
const $symbolSearchBtn = $("#symbolSearchBtn");

//call fx

//Functions
function getSearchedStock(obj) {
    console.log("obj ", obj);
    let stockObj = obj;
    console.log("stockObj: ", stockObj);
};

//API call for a single or multiple stocks
function getStocks(APIkey) {
    let stock = $symbolSearch.val();
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${stock}&types=quote&token=${ APIkey }`,
            method: 'GET'
        }).then(function(response) {
            return resolve(response);
        })
        .catch(err => {
            return reject(err.responseText);
        })
    })
};
//fx handles the ajax call before using data in 2nd fx
async function init() {
    let stockObj = await getStocks(key);
    getSearchedStock(stockObj);
}

function parameterStr(array) {
    let finalStr = array.toString();
    return finalStr;
};

//click events
$symbolSearchBtn.on("click", init);
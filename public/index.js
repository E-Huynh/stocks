//Parameters
const key = 'Tpk_34cea288c0494864ae04a08d5ad02dc2'
//Jquery targets
const $symbolSearch = $("#symbolSearch");
const $symbolSearchBtn = $("#symbolSearchBtn");

//call fx

//Functions
function getSearchedStock(obj) {
    console.log("obj ", obj);
    let stock = $symbolSearch.val();
    let stockObj = obj;
    console.log("stockObj: ", stockObj);
};

//API call for a single or multiple stocks
function getStocks(APIkey, stock) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=tsla&types=quote&token=Tpk_34cea288c0494864ae04a08d5ad02dc2`,
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
    let stockObj = await getStocks();
    getSearchedStock(stockObj);
}

function parameterStr(array) {
    let finalStr = array.toString();
    return finalStr;
};

//click events
$symbolSearchBtn.on("click", init);
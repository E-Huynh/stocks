//Parameters
const key = 'Tpk_34cea288c0494864ae04a08d5ad02dc2'
//Jquery targets
const $symbolSearch = $("#symbolSearch");
const $symbolSearchBtn = $("#symbolSearchBtn");
const $stockDisplayHeader = $("#stockDisplayHeader");

//Functions
function getSearchedStock(obj) {
    console.log("obj: ", obj);
    let arr = [];
    for (const key in obj) {
        arr.push(obj[key].quote.symbol)
    }
    console.log(arr);
    //obj manipulation here
    $stockDisplayHeader.text(obj[arr[0]].quote.symbol);
};

//API call for a single or multiple stocks
function getStocks(APIkey) {
    let stock = $symbolSearch.val();
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${stock}&types=quote&token=${APIkey}`,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            return resolve(response);
        })
            .catch(err => {
                return reject(err.responseText);
            })
    })
};
//fx handles the ajax call before using data in 2nd fx
//duplicate this and change 2nd fx to manipulate obj differently
async function displayStocks() {
    let stockObj = await getStocks(key);
    getSearchedStock(stockObj);
}

//click events
$symbolSearchBtn.on("click", displayStocks);
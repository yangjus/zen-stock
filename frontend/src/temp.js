function createAccount(first_name, last_name, street_number, street_name, city, state, zip){
    var request = require('superagent');
    var body = {
        "first_name": first_name,
        "last_name": last_name,
        "address": {
          "street_number": street_number,
          "street_name": street_name,
          "city": city,
          "state": state,
          "zip": zip
        }
      }
      request.post('http://api.reimaginebanking.com/customers?key=bb8633c98be2308d1dba1ef01947f500')
      .send(body)
      .end(function (res) {
        console.log('Status:', res.status);
        console.log('Response Body:', res.body);
        id = res.body.object_created._id
        var account_body = {
            "type": "Checking",
            "nickname": first_name,
            "rewards": 0,
            "balance": 0,
            "account_number": "0123012301230123"
          }
        request.post('http://api.reimaginebanking.com/customers/655a1bbf9683f20dd5188a5c/?key=bb8633c98be2308d1dba1ef01947f500')
        .send(body)
      });
}

function getAccountInfo(id){
  request.get('http://api.reimaginebanking.com/accounts/655a1bbf9683f20dd5188a5c/?key=bb8633c98be2308d1dba1ef01947f500')
}

function depositMoney(id, amount){
    var body = {
        "medium": "balance",
        "transaction_date": "2023-11-19",
        "status": "pending",
        "amount": amount,
        "description": "Money deposited."
      }
      request.post('http://api.reimaginebanking.com/accounts/655a1bbf9683f20dd5188a5c/deposits/?key=bb8633c98be2308d1dba1ef01947f500')
      .send(body)
}

function createMerchant(){
    var body =  {
        "name": "ZenStock",
        "category": "Stocks",
        "address": {
          "street_number": "205",
          "street_name": "Stonks Road",
          "city": "Ann Arbor",
          "state": "MI",
          "zip": "48104"
        },
        "geocode": {
          "lat": 0,
          "lng": 0
        }
      }
      request.post('http://api.reimaginebanking.com/merchants/?key=bb8633c98be2308d1dba1ef01947f500')
      .send(body)
}

function purchaseStock(id, stockid, amount){
    var body = {
        "merchant_id": "6559922e9683f20dd5188a3f",
        "medium": "balance",
        "purchase_date": "2023-11-19",
        "amount": amount,
        "status": "pending",
        "description": "Stock purchased."
      }
      request.post('http://api.reimaginebanking.com/accounts/655a1bbf9683f20dd5188a5c/purchases/?key=bb8633c98be2308d1dba1ef01947f500')
      .send(body)
      .end(function(res) {
        // increase stock id of guy here
      });
}

function withdrawal(id, amount){
    var body = {
        "medium": "balance",
        "transaction_date": "2023-11-19",
        "status": "pending",
        "amount": amount,
        "description": "Withdrawn money."
      }
      request.post('http://api.reimaginebanking.com/accounts/655a1bbf9683f20dd5188a5c/withdrawals/?key=bb8633c98be2308d1dba1ef01947f500')
      .send(body)
}
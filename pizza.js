// JavaScript Document

// access the JSON file using an XHR object

let requestURL = "https://flamefiby.github.io/json/package.json";

// create  new XHR object, XHR object allows us to fetch data without a page refresh

let request = new XMLHttpRequest();
// opening a new request
request.open('GET', requestURL);
// request type
request.responseType = 'json';
// send the request using the send method
request.send();

// wait for the request to be returned, store the response in a variable, invoke pizzaTypes function with pizzaTypes as argument
request.onload = function(){
    let plentyPizza = request.response;
    console.log(plentyPizza);
    pizzaTypes(plentyPizza);
};

function pizzaTypes(jsonObj) {
    let pizzaTypes = jsonObj.pizzaTypes;
    let section = document.querySelector('section');
    for(let i = 0; i < pizzaTypes.length; i++){
        // build HTML elements
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let ul = document.createElement('ul');

        img.setAttribute('src','')

    }
}

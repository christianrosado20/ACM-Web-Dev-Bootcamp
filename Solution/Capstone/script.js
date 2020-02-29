// Coffee Tag and Prices
var latteTag = document.getElementById('latte');
var lattePrice = 2.00;
var espressoTag = document.getElementById('espresso');
var espressoPrice = 1.50;
var mochaTag = document.getElementById('mocha');
var mochaPrice = 3.00;
var cappuccinoTag = document.getElementById('cappuccino');
var cappuccinoPrice = 2.50;

// Update the page with coffee prices
latteTag.innerHTML = lattePrice.toFixed(2);
espressoTag.innerHTML = espressoPrice.toFixed(2);
mochaTag.innerHTML = mochaPrice.toFixed(2);
cappuccinoTag.innerHTML = cappuccinoPrice.toFixed(2);

//------------------------------------------------------------
// Size Tag and Prices
var smallTag = document.getElementById('small-cup');
var smallCupPrice = 0.00;
var mediumTag = document.getElementById('medium-cup');
var mediumCupPrice = 1.25;
var largeTag = document.getElementById('large-cup');
var largeCupPrice = 2.00;

// Update the page with prices of the cup sizes
smallTag.innerHTML = smallCupPrice.toFixed(2);
mediumTag.innerHTML = mediumCupPrice.toFixed(2);
largeTag.innerHTML = largeCupPrice.toFixed(2);

//------------------------------------------------------------
// Milk Tag and Prices
var wholemilkTag = document.getElementById('wholemilk');
var wholemilkPrice = 0.00;
var lactosefreeTag = document.getElementById('lactose-free');
var lactosefreePrice = 0.50;
var almondmilkTag = document.getElementById('almond-milk');
var almondmilkPrice = 1.25;
var oatmilkTag = document.getElementById('oatmilk');
var oatmilkPrice = 2.00;

// Update the page with milk prices
wholemilkTag.innerHTML = wholemilkPrice.toFixed(2);
lactosefreeTag.innerHTML = lactosefreePrice.toFixed(2);
almondmilkTag.innerHTML = almondmilkPrice.toFixed(2);
oatmilkTag.innerHTML = oatmilkPrice.toFixed(2);

//------------------------------------------------------------
// Whip Cream Tag and Prices
var noWhipCreamTag = document.getElementById('no-whip');
var noWhipCreamPrice = 0.00;
var whipCreamTag = document.getElementById('whip-cream');
var whipCreamPrice = 0.25;
var chocoWhipCreamTag = document.getElementById('choco-whip-cream');
var chocoWhipCreamPrice = 0.50;

// Update the page with prices of the whip cream
noWhipCreamTag.innerHTML = noWhipCreamPrice.toFixed(2);
whipCreamTag.innerHTML = whipCreamPrice.toFixed(2);
chocoWhipCreamTag.innerHTML = chocoWhipCreamPrice.toFixed(2);

// Summary Tag and prices
var subtotalTag = document.getElementById('subtotal');
var subtotalPrice = 0.00;
var onlineFeeTag = document.getElementById('online-fee');
var onlineFeePrice = 0.25;
var taxTag = document.getElementById('tax');
var taxPrice = 0.12;
var totalTag = document.getElementById('total');
var totalPrice = 0.00;

// Update the page with summary prices
subtotalTag.innerHTML = subtotalPrice.toFixed(2);
onlineFeeTag.innerHTML = onlineFeePrice.toFixed(2);
taxTag.innerHTML = taxPrice.toFixed(2);
totalTag.innerHTML = totalPrice.toFixed(2);




// Creating a list
var receipt = [];

// Item object
function Item(name, price) {
  this.name = name;
  this.price = price;
}



// Functions
function select(name, price) {
  // setting variables
  var nameTag = name.toLowerCase() + "Tag";
  var newItem = new Item(name, price.toFixed(2));
  // creating the new li for the item selected
  var breakdown = document.getElementById('breakdown');
  var li = document.createElement('li');
  var message = document.createTextNode(newItem.name + "\t $" + newItem.price);
  receipt.push(message);
  li.appendChild(message);
  breakdown.appendChild(li);
  // updating subtotal, tax, and total
  subtotalPrice += parseInt(newItem.price);
  taxPrice = (subtotalPrice * 0.12);
  totalPrice = subtotalPrice + taxPrice + onlineFeePrice;

  subtotalTag.innerHTML = subtotalPrice.toFixed(2);
  taxTag.innerHTML = taxPrice.toFixed(2);
  totalTag.innerHTML = totalPrice.toFixed(2);
  alert(newItem.name + " is added to was selected");
}

function purchase() {
  alert("Gracias por comprar en la Cuevita de Tarzan!\n" +
        receipt[0] + "\n" +
        receipt[1] + "\n" +
        receipt[2] + "\n" +
        receipt[3] + "\n\n" +
        "Total: $" + totalPrice)

}

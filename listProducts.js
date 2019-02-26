var fake = require('faker');
console.log("----------------------------------------");
console.log("10 RANDOM PRODUCT NAMES AND THEIR PRICES");
console.log("----------------------------------------");
for (var i=1;i<=10;i++){
    var pName = fake.commerce.productName();
    var pPrice = fake.commerce.price();
    console.log(i+ "> " + pName + " = $" + pPrice);
   
    
}

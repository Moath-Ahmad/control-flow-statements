// Break uses to terminate a loop or a switch
var products = [
    { name: 'phone', price: 700 },
    { name: 'tablet 1', price: 900 },
    { name: 'laptop', price: 1200 },
    { name: 'tablet 2', price: 900 },
    { name: 'headset', price: 300 },
];
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price == 900) {
//         console.log(`We find this item (${products[i].name}) which is suit your selected price (${products[i].price})`)
//         break;
//     }
// }
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price == 900) {
//         console.log(`We find this item (${products[i].name}) which is suit your selected price (${products[i].price})`)
//     }
// }
var discound = 0;
var product = products[3];
switch (product.name) {
    case 'phone':
        discound = 5;
        showDiscount(product.name, discound);
        break;
    case 'tablet 1':
        discound = 10;
        showDiscount(product.name, discound);
        break;
    case 'laptop':
        discound = 15;
        showDiscount(product.name, discound);
        break;
    case 'tablet 2':
        discound = 20;
        showDiscount(product.name, discound);
        break;
    default:
        // throw Error(`The product doesn't have a discount`);
        console.log("".concat(product.name, " doesn't have a discount"));
}
;
function showDiscount(name, discound) {
    console.log("".concat(name, " has discount ").concat(discound));
}

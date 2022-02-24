// Break uses to terminate a loop or a switch

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet 1', price: 900 },
    { name: 'laptop', price: 1200 },
    { name: 'tablet 2', price: 900 },
];

// for (let i = 0; i < products.length; i++) {
//     if (products[i].price == 900) {
//         console.log(`We find this item (${products[i].name}) which is suit your selected price (${products[i].price})`)
//         break;
//     }
// }

for (let i = 0; i < products.length; i++) {
    if (products[i].price == 900) {
        console.log(`We find this item (${products[i].name}) which is suit your selected price (${products[i].price})`)
    }
}

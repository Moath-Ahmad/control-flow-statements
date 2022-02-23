// const max: number = 100;
// let counter = 0;

// if (counter < max) {
//     counter++;
// }

// console.log(counter);

// const max: number = 100;
// let counter: number = 100;

// if (counter < max) {
//     counter++;
// }
// console.log(counter);

// const max: number = 100;
// let counter: number = 100;

// if (counter < max) {
//     counter++;
// }
// else {
//     counter = 1;
// }

// console.log(counter);

// const max: number = 100;
// let counter: number = 100;

// counter < max ? counter++ : counter = 1;

// console.log(counter);

let discount: number;
let itemsCount = 3;

itemsCount > 0 && itemsCount < 5 ? discount = 5
    : itemsCount >= 5 && itemsCount < 10 ? discount = 10
        : discount = 15;

console.log(`You get ${discount}% discount`);


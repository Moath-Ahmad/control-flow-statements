//While
// let counter: number = 1;
// while (counter <= 5) {
//     console.log(counter);
//     counter++;
// }


// let number = 0;
// let sum = 0;

// while (number < 10) {
//     sum += number;
//     number++;
//     console.log(sum);
// }
// console.log(sum);

let list: any = document.querySelector('#list');

while (list.firstChild) {
    list.removeChild(list.firstChild);
}
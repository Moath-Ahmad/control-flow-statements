// let targetId = 'btnUpdate';

// switch (targetId) {
//     case 'btnUpdate':
//         console.log('Update');
//         break;
//     case 'btnDelete':
//         console.log('Delete');
//         break;
//     case 'btnNew':
//         console.log('New');
//         break
// }

let month: number = 2,
    year: number = 2019;

let day: number = 0;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        ((year % 4 == 0) && !(year % 100 == 0) || (year % 400 == 0)) ? day = 29 : day = 28;
        break
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);

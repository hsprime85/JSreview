// let js = 'amazing';
// console.log(40 + 8 + 23 - 8);

// console.log('Hanson');
// console.log(23);

// let firstName = "Hanson";
// console.log(firstName);

// let country = "South Korea";
// let continent = "Asia";
// let population = 55000000;
// let isIsland = false;
// const language = "Korean"
// console.log(country, continent, population, isIsland, language);


// const markWeight1 = 78;
// const markHeight1 = 1.69;
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;

// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;

// const markMass1 = markWeight1 / (markHeight1 * markHeight1);
// const johnMass1 = johnWeight1 / (johnHeight1 * johnHeight1);
// const markHigherBMI = markMass1 > johnMass1;
// console.log(markMass1, johnMass1, markHigherBMI);

// if (markMass1 > johnMass1) {
//     console.log(`Mark's BMI (${markMass1})is higher than John's (${johnMass1})!`);
// } else {
//     console.log(`John's(${johnMass1}) BMI is higher than Mark's(${markMass1})!`);
// }



// const markMass2 = Math.round(markWeight2 / (markHeight2 * markHeight2));
// const johnMass2 = Math.round(johnWeight2 / (johnHeight2 * johnHeight2));
// const markHigherBMI2 = markMass2 > johnMass2;

// console.log(markMass2, johnMass2, markHigherBMI2);

// if (markMass2 > johnMass2) {
//     console.log(`Mark's BMI (${markMass2})is higher than John's (${johnMass2})!`);
// } else {
//     console.log(`John's(${johnMass2}) BMI is higher than Mark's(${markMass2})!`);
// }


// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);
// console.log(!hasGoodVision);


// if (shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('someone else should drive...');
// }

// const hasDriverLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('someone else should drive...');
// }

// const dolphinsAvg = (96 + 108 + 89) / 3;
// console.log(`Dolphin's avg is ${dolphinsAvg}`);
// const koalasAvg = (88 + 91 + 110) / 3;
// console.log(`Koala's avg is ${koalasAvg}`);

// if (dolphinsAvg > koalasAvg) {
//     console.log("Dolphin team wins!");
// } else {
//     console.log("Koala team wins!");
// }


// const dolphinsAvg = (97 + 112 + 101) / 3;
// console.log(`Dolphin's avg is ${dolphinsAvg}`);
// const koalasAvg = (109 + 95 + 123) / 3;
// console.log(`Koala's avg is ${koalasAvg}`);

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log("Dolphin team wins!");
// } else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
//     console.log("Koala team wins!");
// }

// const dolphinsAvg = (82 + 112 + 101) / 3;
// console.log(`Dolphin's avg is ${dolphinsAvg}`);
// const koalasAvg = (94 + 75 + 106) / 3;
// console.log(`Koala's avg is ${koalasAvg}`);

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log("Dolphin team wins!");
// } else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
//     console.log("Koala team wins!");
// } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
//     console.log("both win the trophy!")
// } else {
//     console.log("no one wins")
// }

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend');
//         break;
//     default:
//         console.log('not a valid day');
// }

// const day = 'friday';

// if (day === "monday") {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === "tuesday") {
//     console.log('Prepare theory videos');
// } else if (day === "wednesday" || day === "thursday") {
//     console.log('Write code examples');
// } else if (day === "friday") {
//     console.log('record videos');
// } else if (day === "saturday" || day === "sunday") {
//     console.log('enjoy the weekend');
// } else {
//     console.log('not a valid day');
// }


const age = 56;

// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink soda');

const drink = age >= 18 ? 'wine' : 'soda';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water ';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'soda'}`);


let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`today bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
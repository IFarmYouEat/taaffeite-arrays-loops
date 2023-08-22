console.log('Hello World.');

//string
let firstName = 'Brock';
// number
let temperatur = 100;
// boolean
let sunny = true;

// array - store a collection of things
// generallly all the same data type (e.g. string)
// Data in an Array is sorted

let colors = ['orange', 'teal', 'green'];

// .pop() removes last item from array
colors.pop();

// log out data from array
console.table(colors);

// adds something to the end
colors.push('blue', 'pink');

console.table(colors);

// adds something to beginning
colors.unshift('purple');
console.table(colors);

// removes something from beginning
colors.shift();
console.table(colors);

// access the first color without removing it
let firstColor = colors[0];
console.log(firstColor);

// Loops
// 'for of' Loop. Loops over each item in 
// an Array and assigns the value to 'item'.
let colorList = document.querySelector("#color-list");

for(let item of colors){
    console.log('color: ', item);
    colorList.innerHTML += '<div>' + item + '</div>';
}

// traditional for loop
let temperaturValues = [72, 84, 93, 102];

//        start,       end,   increment
for(let index = 0; index < 4; index += 1){
    console.log(index)
}

for(let i = 0; i < temperaturValues.length; i+=1){
    let temp = temperaturValues[i];
    console.log('temp: ', temperaturValues[i]);
}

let start = 0
while (start <10){
    console.log(start);
    start += 1;
}

// data you are provided: A list of all item values (cost of items)
// expected output: total value of all items. Indication of wether
// the fundraising goal has been achieved.

const fundraisingGoal = 20000;

const itemList = [1400, 2900, 5200, 7700, 10200];
let currentTotal = 0;
let fundraisingSuccess = false;

for(let item of itemList){
    currentTotal += item;
}
console.log('Final totals:', currentTotal);

if(fundraisingGoal <= currentTotal){
    fundraisingSuccess = true;
}

console.log(fundraisingSuccess)

let outputDiv = document.querySelector('#output');

if(fundraisingSuccess){
    outputDiv.innerHTML = 'Goal Reached! We beat our goal by ' + (currentTotal - fundraisingGoal);

}else{
    outputDiv.innerHTML = 'Goal not yet reached, we still need ' + (fundraisingGoal - currentTotal);
}

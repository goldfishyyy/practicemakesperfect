/*                                           Problem 1.1
 Given the array, implement a function for generating a new array which doubles the quantity and price in each 
*/
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//method 1: using for loops
function doubleValue1(inputObject) {
  const doubleArray = [];
  for (let item of inputObject) {
    const doubleInput = {};
    for (let key in item) {
      let value = item[key] * 2;
      doubleInput[key] = value;
    }
    doubleArray.push(doubleInput);
  }
  return doubleArray;
}

console.log("#1.1 using for loop: ");
console.log(doubleValue1(itemsObject));
console.log("*******************************************************");

//method 2: using array.map()
const doubleValue2 = (array)=>{
  return array.map(obj=>{
    return{...obj, quantity:obj.quantity * 2, price: obj.price * 2}
  });
}

console.log("#1.1 using array.map(): ");
console.log(doubleValue2(itemsObject));
console.log("*******************************************************");

/*                                             Problem 1.2
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only. 
*/
const filterItem = (array) => {
  return array.filter((item) => item.quantity > 2 && item.price > 300);
};

console.log("Problem 1.2 filter item:");
console.log(filterItem(itemsObject));
console.log("*******************************************************");

/*                                            Problem 1.3
Given the array, implement a function to calculate the total value of the items. 
*/
function totalValue(array) {
  let result = array.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return result;
}

console.log("Problem 1.3 total value of the items: ");
console.log(totalValue(itemsObject));
console.log("*******************************************************");

/*
                                             Problem 2 
Given the string, implement a function to remove all the non-alphabet characters
     and extra space in the string and convert the string to all lowercase.
*/
const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

function convertString(stringInput) {
  return stringInput.trim().split("-").join(" ").toLowerCase();
}
let newString = convertString(string);
console.log("Problem 2 convert string:");
console.log(newString);
console.log("*******************************************************");

/*                                      Problem 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, 
second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge. 

*/
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function mergeArray(array1, array2) {
  const map = new Map();
  //set up map: map(key: uuid, value: {item})
  array1.forEach((item) => map.set(item.uuid, item));
  array2.forEach((item) =>
    map.set(item.uuid, { ...map.get(item.uuid), ...item })
  );
  //create array using map value, sort array by uuid
  let mergeArray = Array.from(map.values()).sort((a, b) => a.uuid - b.uuid);
  //format array with null
  const result = mergeArray.map((item) => {
    const model = { uuid: null, name: null, role: null };
    return { ...model, ...item };
  });
  return result;
}

const result = mergeArray(first, second);
console.log("Problem 3 combine and sort array:");
console.log(result);

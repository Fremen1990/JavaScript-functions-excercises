const br = () => console.log("\n-------------------------------------------------\n");
const log = (logValue) => console.log(logValue)
// 1. Please write a function that shows the usage of closures

// IIFE  function
// ->  "i" from function setTimeout is calling to

// for(let i=0; i<=10; i++){
//    ( function(i){
//         setTimeout(function(){
//            log(`Just after ${i} seconds(s): ${i}`);
//         }, i*1000);
//     })(i)
// }

// ------------------------------------------------------------------------------
// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

// const arr = [9,1,22,0,2];

// let oldSchoolFor = 0
// for(let i=0; i<arr.length; i++){
//     oldSchoolFor += arr[i]
// }
// br()
// log(`For method - old way :)  \n result:${oldSchoolFor}`)
// br()
//
// const es6ReduceSum = arr.reduce((prev, curr)=> prev+curr)
// log(`Reducer - new method from ES6 \n result:${es6ReduceSum}`)
// br()

// ------------------------------------------------------------------------------

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// const input = [[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5];
//
// const flatten = (input) => input.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? flatten(curr) : curr), [])
//
// log(`Flatten recursive function with reduce, input array: ${input}`)
// log(`Output flattened array: ${flatten(input)}`)


// ------------------------------------------------------------------------------

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

// const arr1 = ['b', 3, 4, 76, 'c'];
// const arr2 = ['a', 'b', 4, 76, 21, 'e'];
//
// const oldSchoolGetCommonElements = (arr1, arr2) => {
//     const commonElements = [];
//
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 commonElements.push(arr1[i])
//             }
//         }
//     }
//     return commonElements;
// }
//
// br()
// log(`For method - old way :)  \n Output: ${oldSchoolGetCommonElements(arr1, arr2)}`)
// log()
// br()
//
// const commonElements = arr1.filter(val => arr2.includes(val))
//
// log(`Combination of filter and include method. \n Output: ${commonElements}`)
// br()

//--------------------------------------------------------------------------------------------

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

// const arr1 = ['b', 3, 4, 76, 'c'];
// const arr2 = ['a', 'b', 4, 76, 21, 'e'];
//
// // These are two symmetric differences from Set A (arr1) and Set B (arr2):
//
// const diff1 = arr1.filter(x=> !arr2.includes(x))
// const diff2 = arr2.filter(y=>!arr1.includes(y))
//
// br()
// log(`From set A (${arr1}) and set B (${arr2}) we have symetric difference: \n ${diff1.concat(diff2)}`)
// br()

// --------------------------------------------------------------------------------------------

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

// const arr1 = [1,2,3];
// const arr2 = [4,5,6,7];
//
// const result = (arr1, arr2)=>{
//
//     const outputArray = []
//
//     arr1.forEach((element, index)=>{
//         outputArray.push(Array(element, arr2[index]))
//         }
//     )
//     return outputArray
// }
// br()
// log(`From ${arr1} and ${arr2} we are taking same indexes and creating array of tuples: \n ${result(arr1, arr2)}`)
// br()

// --------------------------------------------------------------------------------------------


// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// const path = ['a', 'b', 'c', 'd']
// const obj = {a: {b: {c: {d: '23'}}}};
//
// // can be done much easier with lodash :)
//
// const getPathResult = (obj, path) => {
//     let currentObj = obj;
//     for (let i = 0; i < path.length; i++) {
//         currentObj = currentObj[path[i]]
//     }
//     return currentObj
// }
// br()
// log(`Function is taking table ${path} with path and iterating throuth the object, going each time deeper to the object, the result is: \n ${getPathResult(obj, path)}`)
// br()

// --------------------------------------------------------------------------------------------


// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// const green = '\033[32m';
// const red = '\033[31m'
// const reset = '\033[0m';
//
// const obj1 = {a: 'b', c: 'd'}
// const obj2 = {c: 'd', a: 'b'}
//
// const obj3 = {a: 'c', c: 'a'};
// const obj4 = {c: 'd', a: 'b', q: 's'};
//
// const checkEquality = (obj1, obj2,  ) => {
//
//     const keys1 = Object.keys(obj1)
//     const keys2 = Object.keys(obj2)
//
//     if (keys1.length !== keys2.length) return false;
//
//     for (let key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false
//         }
//     }
//     return true;
// }
//
// br()
// log(`Function is checking shallow equality by pooling object keys and comparing it in "For of" loop, check results: \n`)
// console.log("Test case #1: ", green,checkEquality(obj1, obj2), reset)
// console.log("Test case #2:", red, checkEquality(obj3, obj4), reset)
// br()


// --------------------------------------------------------------------------------------------


// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const keys = ['color', 'size'];
const obj = {color: 'Blue', id: '22', size: 'xl'};

const excludeObjectKeys = (keys, obj) => {

    const objKeys = Object.keys(obj);

    function executeSymetricDifferences(arr1, arr2) {
        const diff1 = arr1.filter(x => !arr2.includes(x))
        const diff2 = arr2.filter(y => !arr1.includes(y))
        return diff1.concat(diff2)
    }

    const keyLeftovers = executeSymetricDifferences(keys, objKeys).toString()

    const valueLeftovers = obj[keyLeftovers]
    const objectsLefovers = new Object();

    objectsLefovers[keyLeftovers] = valueLeftovers;
    return objectsLefovers

}
br()
log(`After filtering and excluding keys which are repetitive, there is key whick left with value: \n`)
console.log(excludeObjectKeys(keys, obj))
br()

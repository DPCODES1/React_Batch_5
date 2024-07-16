//variables
//var let const
// var name1;
// name1 = "Deepak";
// console.log(name1) //functional scope

// function nameChanger() {
//     var name1 = "Vanakam"
//     console.log(name1)
// }

// nameChanger()
// console.log(name1)

// //let and const block scope
// let name2 = "Deepak";
// // name2 = "Vanakam"
// // console.log(name2)

// {
//   let name2 = "Navneet"
//   console.log(name2)
// }

// //const
// const name3 = "Priyadharshini";
// console.log(name3)

//let,const(block scoped) var(functional scoped)(hoisting,TDS)

//data types
//string numbers booleans objects arrays //normal datatypes
//NaN undefined null Infinity BigInt//seperated

//Primitive and Reference Data Types

// let str = "Deepak";
// let num = -3.222;
// let booleans = true || false;
// //0 1 2 3
// const array = ["Deepak", 23, "Developer", ["Playing"]];
// let obj = {
//   "name-1": "Deepak",
//   age: 23,
//   occupation: ["Tutor", "Developer"],
//   friend: {
//     akash: {
//       age: 23,
//       occupation: "Accountant",
//     },
//   },
// }
// console.log(obj["name-1"])
//reference data type
// let arr2 = array
// arr2[2] = "Chef"
// console.log(arr2,array)

// console.log(typeof(2n))

//Operators
//arithmetic assignment logical conditional/relational string

// + - * / ** %
// console.log(4/2)

//assignment
// = += -= *= /= %= **=
//a+=2 // a = a+2

// let a = 2
// a = a + 6

//Conditional // > < == === <= >= != !==
// console.log(2 !== "2")

//logical //&& || !
//if either one is false in &&,it is false
// console.log(!(2<2))

//ternary ?: ??
//condition ? true val : false val
// console.log(null ?? 1)

//control structures
//conditional and looping

// const val = prompt("Enter the number")
// if(val == 1) {
//     a = 1
// } else {
//     a = 2
// }

// console.log(a)

// let a = val == 1 ? 1 : 2;
// console.log(a)

//looping statements
//for forof forin while dowhile
//for(init,cond,inc/dec)
// const arr = ["Deepak",19,222]
// for(let i = 0;i<arr.length;i++) {
//     console.log(arr[i])
// }

// for(const arrItems of arr) {
//     console.log(arrItems)
// }

// for(const key in obj) {
//     console.log(key + ":" + obj[key])
// }

// function add(a) {
//    return function(b) {
//      return a+b
//    }
// }

// const adder = add(12)
// console.log(adder(10))

//IIFE
//   (function() {

//   })(1,2)
// ((a,b) => console.log(a,b)
// )(1, 2);

//stack //recursive
// function fact(a) {
//     if(a==1 || a==0) {
//         return a
//     } else {
//        return a*fact(a-1)
//        //5*4*3*2*1
//     }
// }

// console.log(fact(5))

//arrow
// const fn = (a,b) => a+b
// console.log(fn(1,2))

//callback

// function caller(fn) {
//     fn()
// }

// caller(()=> {
//     console.log("Vanakam")
// })
// const objname = "data"
// const obj = {
//     [objname]:{
//         name:"Deepak"
//     }
// }
// console.log(obj)

//destructing,spread and rest operator
// 0 1 2
// const arr1 = [1,2,3]
// const one = arr[0]
// const two = arr[1]
// const three = arr[3]
// console.log(arr1)
// const [o,t] = arr1
// console.log(o,t)

// const obj = {
//     name:"deepak",
//     age:23,
//     occupation:"developer"
// }

// const {name:n1,age,occupation} = obj

// console.log(n1)

// const arr = [1,2,3,4,5]

// console.log([...arr,8,9,10])

// console.log(arr)

// const obj = {
//     name:"Deepak",
//     age:23
// }

// console.log({...obj,address:"Navaneet"})

// rest

// function add(a,b,...c) {
//    let sum = 0;
//    console.log(c)
//    for(const d of c) {
//      sum+=d//sum = sum + d
//    }
//    console.log(sum)
// }

// // add(,3,1,2,3,4,5,6,7)

// function dummy(a,b) {
//     console.log(`${a} ${b}`)
// }

// const new1 = dummy.bind(null,"This is")
// new1(2)

//array methods,OOP concepts,synchronous and async tasks,promises,data fetching,DOM
const obj = {
  name: "deepak"
};
// console.log(Object.getOwnPropertyDescriptor(obj,"name"))
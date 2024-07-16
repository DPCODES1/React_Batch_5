const arr = [1,2,3,4,2,2]

arr.push(2) //add the last element from an array
arr.pop() //removes the last element from the array

arr.unshift(2) //add the element at first
arr.shift() //remove the element at first


// console.log(arr.concat([2,3,4,5],[2,3,4]),arr)

// arr.splice(1,2,2,3,4) //usefull for deletion as well as adding the data in a particular index
// console.log(arr.slice(1,3)) //(idx,count-1)
// console.log(arr)

// console.log(arr.findIndex((val,idx,array)=> {
//      return val == 2
// }))

// console.log(arr.filter((val)=> val != 2))

// console.log(arr.map((val,idx,arr)=> {
//     return JSON.stringify({[idx]:val})
// }))

// let sumData = 0;
// arr.forEach((val)=> {
//    sumData+=val
// })

// console.log(sumData)

// console.log(arr.reduce((pre,cur)=> {
//     console.log(pre,cur)
//     return pre+cur
// }))

// arr.reverse()

// console.log(arr.includes(2))
// console.log(typeof(arr.join(" ")))

// console.log("1 2 3 4 5 6".split(" "))
// console.log(arr.indexOf(2,3))

// console.log(arr)


const textFromH1 = document.body.children[0].textContent 
console.log(textFromH1)
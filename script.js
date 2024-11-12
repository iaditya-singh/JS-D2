// data type

// primitive data type (it contains a single value of data)
//number
// let num = 100;
// //string
// let str = "hello";
//boolean
// let bool = true;
// console.log(typeof(bool))
// //null
// let n = null;
// //undefined
// let undf;
// //symbol
// let sym = Symbol("#symbol");


// non-primitive data type (collection of data type)
//array 
// let arr = [1, "aditya", "singh", 22, true, { skills: ["html", "js", "bootstrap"] }, [56, 78]];
// console.log(arr)

// console.log(typeof (arr))
// console.log(arr.length)


// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5].skills[2])
// console.log(arr[6])

// DRY (don't repeat yourself) 

// for (let i = 0; i < arr.length; i++)
// console.log(arr[i])

// i means itteration

// in js we can store multiple or different type of data in array.

//object
let obj = { name: "Alice", age: 30 };

let studentData = {
    id: "1",
    fname: "aditya",
    lname: "singh",
    age: 24,
    add: "satna",
    skills: ["html", "js", "css"],
    contact: 987654321,
    email: "shahid@gmail.com"
}

console.log(studentData)

console.log(studentData.id)
console.log(studentData.add)
console.log(studentData.fname + " " + studentData.lname)


// 1.Declare and initialize an empty multidimensional array.
// (Array of arrays)

//2.let nums =[0,1,2, 3,[1,0 ,1,2], [2,1 ,0,1]]

// let Newnum= nums.flat()
// console.log(Newnum)

// loop
// 3. Write a program to print numeric counting from 1 to 10.
// for(i =1; i<=10 ; i++){
//     console.log(i)
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let table =prompt("enter your table")

// for(let i= 1; i<=10; i++){
//     console.log(table + "x " + i +  "= " + table*i)
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits  = ["apple", "banana","mango", "orange", "strawberry"]
// for (let i =0; i<fruits.length; i++){
//     console.log("index of " + i+ " " + fruits[i])
// }
  
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// let counting = []
// for (let i =0; i<=15; i++){
//     counting.push(i)
  
// }
// console.log(counting)
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num= counting.reverse()
console.log(counting)
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

let Even = []

for (let i =0; i<=20 ; i++){
    if(i % 2 == 0){
        Even.push(i)
    }
}
console.log(Even)
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
let odd = []

for (let i =0; i<=20 ; i++){
    if(i % 2 !== 0){
        odd.push(i)
    }
}
console.log(odd)
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let series = []

for (let i = 0;  i<=10; i++){
    let num = i *2
    series.push(num +  "k")
}

console.log(series)

// 7.You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let search = prompt("search by user input")
// let item = ["cake" ," appple pie" ,"cookie" ,"chips" ,"patties"]
// let found = false;

// for (let i = 0 ; i<item.length; i++){
//     if(search.toLowerCase()=== item[i].toLowerCase()){
//         found = true;
//         break;
//      } 
// }
// if(found){
//     console.log("found")
// }
// else{
//     console.log("not found")
// }

// 8. Write a program to identify the largest number in the
// given array.
let A = [24, 53, 78, 91, 12]
let largestNum = A[0]
for (let i=0; i<A.length; i++){
    if(largestNum < A[i]){
        largestNum= A[i]
    }
}
console.log(largestNum)


// 9. Write a program to identify the smallest number in the
// given array.

// let A = [24, 53, 78, 91, 12]

// let smallestNum = A[0]
// for (let i = 0; i<A.length; i++){
//     if(A[i] < smallestNum){
//         smallestNum = A[i]
       
//     }
// }
// console.log(smallestNum)


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// let num =5

// for(let i= 1; i<=20; i++){
//     console.log(num + "x " + i +  "= " + num*i)
// }


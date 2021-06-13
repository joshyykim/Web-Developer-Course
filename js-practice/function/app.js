function singSong() {
    console.log("Do")
    console.log("Re")
    console.log("Me")
    console.log("Pa")
}

function callThreeTimes(func) {
    let a = 'Tom'
    let b = 'Tim'
    func(a, b)
    func(a, b)
    func(a, b)
}

function greet(name) {
    console.log(`Hello, ${name}`)
}

// greet('Josh')
// greet('Tim')
// greet('Timo')

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

const greetToTwo = function (person1, person2) {
    greet(person1)
    greet(person2)
}

greetToTwo('Amy', 'Tom')



// callThreeTimes(greetToTwo)

function mystery() {
    num = Math.random();
    if (num > 0.5) {
        return function () {
            console.log("Lucky!")
        }
    } else {
        return function () {
            alert("HEHEHEHEHEHEHEHE!")
        }
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// nums.forEach(function (num) {
//     if (num % 2 != 0) {
//         console.log(num);
//     }
// })

// const square = nums.map(function (num) {
//     return Math.pow(num, 2);
// })

// square.forEach(function (num) {
//     if (num % 2 != 0) {
//         console.log(num);
//     }
// })

// const add = function (x, y) {
//     return x+y
// }   -> exact same thing as below arrow functions
// const add = (x, y) => {
//     return x + y
// }
// const add = (x, y) => {
//     return x + y
// }
// const add = (x, y) => (
//     x + y
// )
// const add = (x, y) => x + y;



// console.log('1')
// setTimeout(() => {
//     console.log("2")
// }, 3000)
// console.log('3')

// const rand = setInterval(() => {
//     console.log(Math.random() * 6)
// }, 2000)

const smallNum = nums.filter(n => {
    return (n <= 4)
})

const pets = { dog: 'bark', cat: 'meow', cow: 'moo', parrot: 'beep' }

newpets = { ...pets, lamb: ' meh' }

function sumSome(...nums) {
    console.log(nums)
    return nums.reduce((total, el) => total + el)
}

function minSome(...nums) {
    console.log(nums)
    return nums.reduce((min, num) => {
        if (num < min) {
            return num
        }
        return min
    })
}

// const numsFromUser = prompt('enter numbers')

// const dog = pets.dog;
// const catSound = pets.cat;
// const cowSound = pets.cow;
const { dog, cat: catSound, cow: cowSound, chicken = 'N/A' } = pets;
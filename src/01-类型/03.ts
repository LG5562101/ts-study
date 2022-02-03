// function sayName (): void {
//     return null
// }

// console.log(sayName())


function sayName (): never {
    throw new Error()
}

console.log(sayName())
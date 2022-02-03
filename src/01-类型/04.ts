// let fnc: Function = () => '674378568364'
// console.log(fnc())

// type函数参数声明
// type userType = {
//     name: string,
//     age: number   
// }
// function addUse (user: userType) {
//     console.log(`添加用户${user}`)
// }
// const user = {
//     name: 'luoguan',
//     age: 232
// }
// addUse(user)

// 函数结构声明
// type userType = {
//     name: string,
//     age: number
// }
// type addUserFun = (user: userType) => boolean


// let userAdd: addUserFun = (user: userType) => {
//     console.log('添加用户', user)
//     return true
// }

// 函数剩余参数
// function sum (...args: any[]) {
//     return args.reduce((pre, cur) => {
//         return pre + cur
//     }, 0)
// }

// console.log(sum(1, 2, 3, 4, 5))

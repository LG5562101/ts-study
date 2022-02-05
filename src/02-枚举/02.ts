// as断言
// function test (flag: boolean) {
//     return flag ? '正确' : 0
// }
// let x = test(true) as string
// x = 90
// as const
// let user: string = 'luoguan' as const
// user = '345345345'
// console.log(user)
// const user = 'luoguan'
// user = '34897589347853'
// 对象只读
// let user = {
//     name: 'luoguan'
// } as const
// 只读元组
// let users = [2, 3, 45] as const
// let x = 90
// let user = [x, 9] as const
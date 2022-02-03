// 基本
// function sum (a: number, b: number): string {
//     return `结果是:${a + b}`
// }
// console.log(sum(10, 7))
// 数组
// const lg = [1, 2, 3]
// const lg:[] = [1, 2, 3]
// const l:(string | number | object)[] = ['2']
// l.push(2222)
// l.push({
//     name: 'luoguan'
// })
// console.log(l)
// 对象的类型推断
// const obj = {
//     name: 'luoguan',
//     open: false,
//     age: 24,
//     lesson: [
//         {
//             title: '测试'
//         },
//         {
//             title: '测试1'
//         }
//     ]
// }
// obj.lesson.push({
//     title: '43534534'
// })
// obj.open = false
// console.log(obj)
// 缺省类型
// let hd: { name: string, age: number, url?: string}
// hd = {
//     name: 'luoguan',
//     age: 19
// }
// console.log(hd)
var lg = /** @class */ (function () {
    function lg() {
    }
    lg.prototype.get = function () {
        return 'luoguan ';
    };
    return lg;
}());
var x = new lg();
x.show();

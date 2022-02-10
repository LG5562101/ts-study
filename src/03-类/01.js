var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class User {
//   name: string
//   age: number
//   constructor (n: string, a : number) {
//     this.name = n
//     this.age = a
//   }
//   info (): string {
//     return `${this.name}的年龄${this.age}`
//   }
// }
// protected private
var User = /** @class */ (function () {
    function User(n, a) {
        this.name = n;
        this.age = a;
    }
    User.prototype.info = function () {
        return "".concat(this.name, "\u7684\u5E74\u9F84").concat(this.age);
    };
    return User;
}());
var ChildUser = /** @class */ (function (_super) {
    __extends(ChildUser, _super);
    function ChildUser(name) {
        return _super.call(this, name, 90) || this;
    }
    ChildUser.prototype.getName = function () {
        console.log(this.name);
    };
    return ChildUser;
}(User));
var x = new ChildUser('luoguan');
// x.info()
console.log(x.info());
// for (const key in x) {
//   if (x.hasOwnProperty(key)) {
//       console.log(key)
//   }
// }

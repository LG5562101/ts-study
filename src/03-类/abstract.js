// class AnTest {
//   protected getPos () {
//     return {
//       x: 500,
//       y: 900
//     }
//   }
// }
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
// class Tank extends AnTest {
//   public move () {
//     // todo
//   }
// }
// class Player extends AnTest {
//   public move () {
//     // todo
//   }
// }
var AnTest = /** @class */ (function () {
    function AnTest() {
    }
    AnTest.prototype.getPos = function () {
        return {
            x: 90,
            y: 100
        };
    };
    return AnTest;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.move = function () {
        return '33333';
    };
    Player.prototype.sayPos = function () {
        return "x:".concat(this.getPos().x);
    };
    return Player;
}(AnTest));
var m = new Player();
console.log(m.sayPos());

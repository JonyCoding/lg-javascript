"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lady = (function () {
    function Lady() {
        this.content = 'hi,帅哥';
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
var xiaojiejie = (function (_super) {
    __extends(xiaojiejie, _super);
    function xiaojiejie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    xiaojiejie.prototype.sayHello = function () {
        return 'hi,honey';
    };
    xiaojiejie.prototype.sayHello2 = function () {
        return _super.prototype.sayHello.call(this) + '. 你好！';
    };
    xiaojiejie.prototype.sayLove = function () {
        return 'I love you';
    };
    return xiaojiejie;
}(Lady));
var lili = new xiaojiejie();
console.log("lili.sayHello()", lili.sayHello());
console.log("lili.sayHello2()", lili.sayHello2());
console.log("lili.sayLove()", lili.sayLove());
//# sourceMappingURL=demo2.js.map
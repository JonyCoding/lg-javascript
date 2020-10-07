"use strict";
//数组类型
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// --------------------------------------------
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // 判断是不是没一个成员都是数字
    return args.reduce(function (prev, current) {
        return prev + current;
    }, 0); //第一个参数是上一次计算的结果，第二个参数是默认值
}
sum(1, 2, 3);
//# sourceMappingURL=05-Array-types.js.map
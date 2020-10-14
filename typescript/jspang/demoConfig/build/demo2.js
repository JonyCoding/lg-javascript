var Status;
(function (Status) {
    Status[Status["massage"] = 0] = "massage";
    Status[Status["spa"] = 1] = "spa";
    Status[Status["dabaojian"] = 2] = "dabaojian";
})(Status || (Status = {}));
function getServe(status) {
    if (status === Status.massage) {
        return '按摩';
    }
    else if (status === Status.spa) {
        return 'SPA';
    }
    else if (status === Status.dabaojian) {
        return '大保健';
    }
}
var result = getServe(2);
console.log(result);
console.log(Status[2]);
//# sourceMappingURL=demo2.js.map
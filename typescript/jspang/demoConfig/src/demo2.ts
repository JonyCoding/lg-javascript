// enum÷÷

// const Status = {
//     massage: 0,
//     spa: 1,
//     dabaojian: 2
// }

// 跟以上的相似，但是枚举类型可以反着查找，也可以自行定义
enum Status{
    massage,
    spa,
    dabaojian = 23
}


function getServe(status: number) {
    if (status === Status.massage) {
        return '按摩'
    } else if (status === Status.spa) {
        return 'SPA'
    } else if (status === Status.dabaojian) {
        return '大保健'
    }
}

const result = getServe(23);
console.log(result);
console.log(Status[23]);


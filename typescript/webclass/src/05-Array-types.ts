//数组类型

const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]

// --------------------------------------------

function sum(...args:number[]) {
    // 判断是不是没一个成员都是数字
    return args.reduce((prev, current) => 
        prev + current
    , 0)  //第一个参数是上一次计算的结果，第二个参数是默认值
}

sum(1, 2, 3)
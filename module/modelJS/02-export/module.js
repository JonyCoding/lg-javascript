let [name, name2] = ['foo module', "name2"]

function hello() {
    console.log("I am Hello");
}
class person {

}
export {
    // 重命名
    name as fooName,
    // 直接导出
    hello,
    // 默认导出成员，使用的时候必须起一个名字
    name2 as default
}
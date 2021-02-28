let [name, age] = ['jack', 18]

// 导出的不是一个对象
export {
    name,
    age
}
// 如果真的想导出对象的话,需要用default的方式，在使用的时候记着要起一个别名
// 仅仅对对象有效

setTimeout(() => {
    name = 'ben'
}, 1000);
export default {
    name,
    age
}

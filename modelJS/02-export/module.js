let [name, name2] = ['foo module', "name2"]
function hello() {
    console.log("I am Hello");
}
export {
    name as fooName, hello,
    name2 as default
}
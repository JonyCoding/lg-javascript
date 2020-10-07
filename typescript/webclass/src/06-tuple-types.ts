// 元组类型
// 明确元素数量和明确数据类型的

export { } //确保跟其他示例没有成员冲突

const tuple: [number, string] = [18,'foo']

// const age = tuple[0]
// const name = tuple[1]

const [age,name] = tuple

// -----------------------------------

Object.entries({
    foo:123,
    bar:456
})
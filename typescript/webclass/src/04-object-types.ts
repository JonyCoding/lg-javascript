//Object类型

export {}  // 确保其他示例没有成员冲突

const foo:Object = 123
const foo2:Object = function(){} //并不单指对象，而是出了object以外的其他类型

const obj:{foo:number ,bar: String} = { foo: 123, bar: 'String' }
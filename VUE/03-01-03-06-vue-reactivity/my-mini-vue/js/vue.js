
class VUE{
    constructor(options) {
        // 通过属性保存选项的数据
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        // 把data中的成员转换成getter和setter，注入VUE实例
        this._proxyData(this.$data)
        // 调用observber对象，监听数据变化
        new Observer(this.$data)
        // 调用compuler对象，解析指令和差值表达式
    }
    _proxyData(data){
        // 遍历所有的熟悉
        Object.keys(data).forEach(key => {
            // 注入VUE实例
            Object.defineProperty(this,key,{
                enumerable:true,
                configurable:true,
                get(){
                    return data[key]
                },
                set(value){
                    if(value === data[key]){
                        return
                    }
                    data[key] = value
                }
            })
        });
    }
}
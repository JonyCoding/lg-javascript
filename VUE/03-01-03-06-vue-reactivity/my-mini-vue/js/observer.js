class Observer {
    constructor(data) {
        this.walk(data)
    }
    walk(data) {
        // 判断data是否是对象
        if (!data || typeof data !== 'object') {
            return
        }
        // 遍历对象的所有属性
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        });
    }
    defineReactive(obj, key, val) {
        const _this  = this
        // 收集依赖发送通知
        let dep = new Dep()
        // 如果val是对象  那么会把对象内部的属性也变为响应式数据
        this.walk(val)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target)
                return val
            },
            set(newVal) {
                if (newVal === val) {
                    return
                }
                val = newVal
                // console.log(_this);
                _this.walk(newVal)
                //发送通知
                dep.notify()
            }
        })
    }
}
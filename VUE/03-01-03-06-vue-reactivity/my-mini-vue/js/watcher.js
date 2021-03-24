class Watcher{
    constructor(vm,key,cb){
        this.vm = vm
        // data中的属性名称
        this.key = key
        // 更新视图的回调函数
        this.cb = cb

        // 把当前的watcher对象记录到Dep类的target
        Dep.target = this
        // 出发get方法在get方法中调用addSub
        this.oldValue = vm[key]
        Dep.target = null
    }
    // 数据发生变化的时候更新视图
    update(){
        let newValue = this.vm[this.key]
        if(this.oldValue === newValue){
            return
        }
        this.cb(newValue)
    }
    // 把当前的
}
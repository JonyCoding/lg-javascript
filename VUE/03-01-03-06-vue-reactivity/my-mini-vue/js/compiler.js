class Compiler {
    constructor(vm) {
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }
    // 编译模板
    compile(el) {
        let childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            if (this.isTextNode(node)) {
                this.compileText(node)
            } else if (this.isElementNode(node)) {
                // 处理元素节点
                this.compileElement(node)
            }
            // 判断node节点是否有子节点。如果有要递归调用子节点
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        });
    }
    // 编译元素节点处理指令
    compileElement(node) {
        console.log(node.attributes);
        let attributes = Array.from(node.attributes)
        //遍历所有的属性
        attributes.forEach(attr => {
            let attrName = attr.name
            if (this.isDirective(attrName)) {
                // 去掉  v-  
                attrName = attrName.substr(2)
                let key = attr.value
                this.update(node, key, attrName)

            }
        });
    }
    update(node, key, attrName) {
        let updateFn = this[attrName + 'Updater']
        updateFn && updateFn.call(this, node, this.vm[key], key)
    }

    // 处理v-text指令
    textUpdater(node, value, key) {
        node.textContent = value
        new Watcher(this.vm, key, (newValue) => {
            node.textContent = newValue
        })
    }
    // v-model
    modelUpdater(node, value, key) {
        node.value = value
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })
        // 双向绑定
        node.addEventListener('input',()=>{
           this.vm[key] = node.value
        })
    }

    //编辑文本节点
    compileText(node) {
        // console.dir(node);
        // {{msg}}
        let reg = /\{\{(.+?)\}\}/
        let value = node.textContent
        if (reg.test(value)) {
            let key = RegExp.$1.trim()
            node.textContent = value.replace(reg, this.vm[key])

            // 创建wawtcher对象，数据改变更新视图
            new Watcher(this.vm, key, (newValue) => {
                node.textContent = newValue
            })
        }
    }
    // 判断元素指令是否是指令
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }
    // 判断节点是否是文本节点
    isTextNode(node) {
        return node.nodeType === 3
    }
    // 判断是否是元素节点
    isElementNode(node) {
        return node.nodeType === 1
    }
}
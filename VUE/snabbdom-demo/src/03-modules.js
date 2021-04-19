import {
    init
} from 'snabbdom/build/init';
import {
    h
} from 'snabbdom/build/h'

// 1、导入模块
import {
    styleModule
} from 'snabbdom/build/modules/style'
import {
    eventListenersModule
} from 'snabbdom/build/modules/eventListeners'
// 2、注册模块
const patch = init([
    styleModule,
    eventListenersModule
])
// 3、使用h()函数的第二个参数传入模块中使用的数据（对象）
let vnode = h('div', [
    h('h1', {
        style: {
            backgroundColor: 'red',
            color: '#fff'
        }
    }, 'color'),
    h('p', {
        on: {
            click: eventHandler
        }
    }, 'hello P')
])

function eventHandler(){
    console.log("别点我");
}

let app = document.querySelector('#app')

patch(app,vnode)
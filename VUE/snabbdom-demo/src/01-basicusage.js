import {init} from 'snabbdom/build/init';
import { h } from 'snabbdom/build/h'

var patch = init([

])
// 第一个参数 ： 标签加选择器
// 第二个参数 ： 标签中文本内容

let vnode = h('div#container.cls', 'hello world')
let app = document.querySelector('#app')
// 第一个参数：旧的vnode：可以是dom元素
// 第二个参数：新的vNode
// 返回一个VNode
let oldVnode = patch(app, vnode)

vnode = h('div#container.xxx', 'hello Snobbdom')
patch(oldVnode, vnode)
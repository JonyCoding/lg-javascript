import {
    init
} from 'snabbdom/build/init';
import {
    h
} from 'snabbdom/build/h'

var patch = init([])

let vnode = h('div.#container', [
    h('h1', 'hello stobbdom'),
    h('p', '这是P标签')
])

let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)
setTimeout(() => {
    vnode = h('div#container', [
        h('h1', 'hello world'),
        h('p', 'Hello P')
    ])
    oldVnode = patch(oldVnode, vnode)
    // 两秒后清楚内容
    setTimeout(() => {
        vnode = h('!')
        patch(oldVnode, vnode)
    }, 2000);
}, 2000);
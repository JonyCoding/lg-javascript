/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-10 09:08:52
# LastEdit: enter your name
# LastEditTime: 2020-10-12 17:37:55
# Description: 
#
============================================================================= */
/*
 * @Author: Jony
 * 
 * @Date: 2020-10-09 23:08:28
 * @LastEditTime: 2020-10-09 23:09:14
 * @# Description: 
 * @FilePath: /lg-javascript/Typescript/jspang/testweb/src/components.ts
 */
export class Header {
    constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'this is a header'
        document.body.appendChild(elem)
    }
}
export class Body {
    constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'this is a body'
        document.body.appendChild(elem)
    }
}
export class Footer {
    constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'this is a Footer'
        document.body.appendChild(elem)
    }
}
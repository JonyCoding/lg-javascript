// 1、判断当前插件是否已经安装
//   2、把vue构造函数记录到全局变量
//   3、把创建Vue实例时候传入的router对象注入到Vue实例上
let _Vue = null
export default class vuerouter {
  constructor (options) {
    this.options = options
    this.routerMap = {}
    this.data = _Vue.observable({
      current: '/'
    })
  }

  static isntall (Vue) {
    if (vuerouter.install.installed) {
      return
    }
    vuerouter.install.installed = true

    _Vue = Vue
    _Vue.prototype.$router = this.options.router
  }
}

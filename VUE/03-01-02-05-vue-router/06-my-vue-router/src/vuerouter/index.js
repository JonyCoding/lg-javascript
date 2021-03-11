let _Vue = null

export default class VueRouter {
  static install (Vue) {
    // 1、判断当前插件是否已经安装
    if (VueRouter.install.installed) {
      return ''
    }
    VueRouter.install.installed = true
    //   2、把vue构造函数记录到全局变量
    _Vue = Vue
    //   3、把创建Vue实例时候传入的router对象注入到Vue实例上
    // _Vue.prototype.$router = this.$options.$router
    // 混入
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.$router
        }
      }
    })
  }
}

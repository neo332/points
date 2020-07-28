/**
 * Bus 总线通信机制
 *  */
import Vue from "vue";

Vue.prototype.$bus = new Vue(); // 全局挂载一个Vue实例

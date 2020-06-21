import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue) {
  
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);

  //2.new 的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastConstructor();
  
  //3.将组件对象手动挂载到一个某个元素上
  toast.$mount(document.createElement('div'));

  //4.toast.$el对应的就是那个div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}

export default obj;

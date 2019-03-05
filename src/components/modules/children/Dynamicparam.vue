<!--  -->
<template>
  <div id="dynamicparam">
      <h2 style="text-align:left;">动态调用绑定参数</h2>
    <p>
      动态参数：
      <input v-model="param1">
    </p>
    <p>
      值：
      <input v-model="value1">
    </p>
    <p>
      作用的元素：
      <input class="inpt" :[param1]="value1">
    </p>
    <p>动态参数中v-bind的使用 v-bind:[参数]="值"</p>
    <br/>
    <br/>
    <h2 style="text-align:left;">动态调用方法参数</h2>
    <p>动态参数：<input v-model="param2"></p>
    <p>作用的元素：<input @[param2]="method" v-model="inputValue"></p>
    <div v-html="methodCallback"></div>
    <p>动态参数中v-on的使用 v-on:[参数]="方法名"</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "dynamicparam",
  components: {},
  data() {
    return {
      param1: "placeholder",
      value1: "我是值",
      param2: "change",
      inputValue: "",
      methodCallback: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
      method: function() {
          this.methodCallback = "<p>" + this.inputValue + "</p>"
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
</style>
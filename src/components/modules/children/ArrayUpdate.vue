<!--  -->
<template>
  <div style="text-align:left;text-indent:2em;" id="arrayupdate">
    <p>原数组会被更新，且会渲染元素的方法</p>
    <ul>
      <li>push()</li>
      <li>pop()</li>
      <li>shift()</li>
      <li>unshift()</li>
      <li>sort()</li>
      <li>reverse()</li>
    </ul>
    <br>
    <p>原数组不会被更新，会创建新数组</p>
    <ul>
      <li>filter()</li>
      <li>concat()</li>
      <li>slice()</li>
    </ul>
    <br>
    <p>原数组会被更新，且不会渲染元素的方法</p>
    <ul>
      <li>array[0]="1"</li>
      <li>array.length=10</li>
    </ul>
    <p class="red">为了使上方的方法也能渲染元素，请使用以下方法代替</p>
    <p class="red">1.array[0]="1"代替为Vue.set("0", 0, "1")</p>
    <p class="red">2.array[0]="1"代替为array.splice("0", 0, "1")</p>
    <p class="red">3.array[0]="1"代替为this.$set("0", 0, "1")</p>
    <p class="red">4.array.length=10代替为array.splice(10)</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "arrayupdate",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
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
ul {
  background-color: antiquewhite;
}
p.red {
    color:red;
}
</style>
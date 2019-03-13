<!--  -->
<template>
  <div id="vuexnamespaced">
    <h1>模块B中的内容：{{moduleB.graph.type}}，面积{{getSize}}，宽{{moduleB.graph.width}}</h1>更改宽度：
    <input type="text" :value="moduleB.graph.width" @change="changeWidth($event.target.value)">
    <p>想要将模块中的getters、mutations、actions放入局部模块中，就使用命名空间</p>
    <p>使用命名空间可以实现不同模块相同的方法名，分离结构</p>
    <p>关于使用模块后，参数传入，参考官方文档，不写源码了 <a href="https://vuex.vuejs.org/zh/guide/modules.html">vuex文档</a></p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "vuexnamespaced",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["moduleB"]),
    ...mapGetters({
      getSize: "moduleB/getSize"
    })
  },
  watch: {},
  methods: {
    ...mapActions({
      changeWidth: "moduleB/changeWidth"
    })
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
a {
    color: blue;
}
</style>
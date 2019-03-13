<!--  -->
<template>
  <div id="vuexmodules">
    <h1>模块A中的内容：{{moduleA.graph.type}}，面积{{getSize}}，长{{moduleA.graph.length}}，宽{{moduleA.graph.width}}</h1>
    更改长度：<input type="text" :value="moduleA.graph.length" @change="changeLength($event.target.value)">
    更改宽度：<input type="text" :value="moduleA.graph.width" @change="changeWidth($event.target.value)">
    <p>模块化适合分离store，使其更加适合管理</p>
    <p v-red>注意：模块中的getters，虽然是在模块中定义的，但是其使用需要通过this.$store.getters.xxxx使用</p>
    <p v-red>mutations、actions与getters类似，使用this.$store直接调用</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》'
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "vuexmodules",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["moduleA"]),
    ...mapGetters(["getSize"])
  },
  watch: {},
  methods: {
      ...mapMutations(['changeLength']),
      ...mapActions(['changeWidth'])
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
<!--  -->
<template>
  <div id="globalmixin">
    <p style="color:red;">请查看控制台信息</p>
    <p>混入对象适合插入一个组件新的内容，类似于继承，不过全局的混入不需要每一个去继承那样麻烦，全局混入适合给组件插入新方法</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "globalmixin",
  myOption: "哈哈",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
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
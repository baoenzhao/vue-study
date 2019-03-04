<!--  -->
<template>
  <div id="vif">
    <button @click="showClick">点我</button>
    <h1 v-if="show">帅气如我</h1>
    <p>v-if可以控制标签的隐藏/显示，使用v-if相当于创建/销毁标签，在没显示之前这个标签就是不存在的，显示后即存在</p>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "vif",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      show: false
    };
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    showClick: function() {
      this.show = !this.show;
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
<!--  -->
<template>
  <div id="vif">
    <button @click="showClick1">点我</button>
    <h1 v-if="show1">帅气如我</h1>
    <p>v-if可以控制标签的隐藏/显示，使用v-if相当于创建/销毁标签，在没显示之前这个标签就是不存在的，显示后即存在</p>
    <button @click="showClick2">点我</button>
    <h1 v-if="show2">帅气如我</h1>
    <h1 v-else>霸气如我</h1>
    <p>v-if和if一样，也能使用v-else，v-else-if，</p>
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
      show1: false,
      show2: false
    };
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    showClick1: function() {
      this.show1 = !this.show1;
    },
    showClick2: function() {
      this.show2 = !this.show2;
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
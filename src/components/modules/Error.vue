<!--  -->
<template>
  <div id="error">
    <div class="contain">
      <h1>404</h1>
      <h2>页面飞去火星啦，要不<button @click="back">返回上一页</button>吧</h2>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "error",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    back: function() {
      this.$router.back(-1);
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
.contain {
  padding: 10% 0px;
  font-family: Cursive;
  font-size: 25px;
}
h1 {
  font-size: 40px;
}
button {
    border: none;
    background-color: #e7e7e7; 
    color: black;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>
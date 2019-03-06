<!--  -->
<template>
  <div id="funny-com">
    <p style="font-size:20px;">
      <img class="smile" src="../../assets/smile.png" alt="笑脸">
      <slot></slot>
      <img class="smile" src="../../assets/smile.png" alt="笑脸">
    </p>
    <p>插槽很简单，只要用{{message}}包裹即可</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "funny-com",
  components: {},
  data() {
    return {
        message: "<slot></slot>"
    };
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
.smile {
  width: 30px;
  height: 30px;
}
</style>
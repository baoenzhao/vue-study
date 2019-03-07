<!--  -->
<template>
  <div id="check-com">
    <h1>我是组件中的内容</h1>
    <div class="center">
      <p class="title">
        苹果
        <input @input="$emit('input', $event.target.value)" value="苹果" type="radio" name="fruit" checked="checked">
      </p>
      <p class="title">
        香蕉
        <input @input="$emit('input', $event.target.value)" value="香蕉" type="radio" name="fruit">
      </p>
      <p class="title">
        葡萄
        <input @input="$emit('input', $event.target.value)" value="葡萄" type="radio" name="fruit">
      </p>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  resolve: {

  },
  name: "check-com",
  //   props: ["value"],
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
  mounted() {
      this.$emit('input', '苹果');//设置默认值
  },
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
.center {
  width: 100px;
  height: 100px;
  margin: 10px auto;
}
.title {
  font-size: 20px;
}
</style>
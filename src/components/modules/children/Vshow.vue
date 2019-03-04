<!--  -->
<template>
  <div id="vshow">
    <button @click="showClick">点我</button>
    <h1 v-show="show">帅气如我</h1>
    <p>v-show与v-if类似，能够隐藏/显示标签</p>
    <p>与v-if不同的是，v-show使用后，标签会立刻创建渲染，而隐藏/显示的功能只是通过display:none这个样式来控制</p>
    <p style="color:red;">所以如果需要经常来控制显隐的，使用v-show更合适，而不需要经常显隐的，使用v-if更合适</p>
  </div>
</template>

<script>

export default {
  name: "vshow",
  components: {},
  data() {
    return {
      show: false
    };
  },
  computed: {},
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
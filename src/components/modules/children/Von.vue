<!--  -->
<template>
  <div id="von">
      <button v-on:click="clickPlus">增加</button>
      <button @click="clcikMinus">减少</button>
      <h2>变量：{{number}}</h2>
      <p>v-on是事件绑定，通过事件绑定触发方法</p>
      <p>v-on可以简写成@</p>
  </div>
</template>

<script>
export default {
  name: "von",
  components: {},
  data() {
    return {
        number: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
      clickPlus: function() {
          this.number++;
      },
      clcikMinus: function() {
          this.number--;
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
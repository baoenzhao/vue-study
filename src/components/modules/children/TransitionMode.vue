<!--  -->
<template>
  <div id="transitionmode">
      <button style="display: block;margin:10px auto;" @click="showClick">动画</button>
    <transition name="alpha"  mode="out-in">
      <button v-if="show" :key="1" @click="showClick">开</button>
      <button v-else :key="2" @click="showClick">关</button>
    </transition>
    <p style="color:red;">行内标签如果需要过渡动画，要注意过渡需要包含所有行内标签，如果未包含，则动画会失效，所以第一个添加的button需要设置样式为block</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "transitionmode",
  components: {},
  data() {
    return {
      show: true
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
.alpha-enter-active, .alpha-leave-active {
    transition: all .5s;
}
.alpha-enter, .alpha-leave-to {
    opacity: 0;
    /* transform: scale(1.5); */
}
/* .alpha-enter-active {
    animation: aplha-animation .5s;
}
.alpha-leave-active {
    animation: aplha-animation .5s reverse;
}
@keyframes aplha-animation {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
} */
</style>
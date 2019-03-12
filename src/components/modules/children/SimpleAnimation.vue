<!--  -->
<template>
  <div id="simpleanimation">
    <button @click="anmationClick1">动画1</button>
    <transition name="slide">
      <div class="square" v-if="show1">搞起来</div>
    </transition>
    <p>动画与过渡结合使用</p>
    <br>
    <br>
    <button @click="anmationClick2">动画2</button>
    <transition
      name="word"
      enter-active-class="move-word-enter"
      leave-active-class="move-word-leave"
    >
      <h1 v-if="show2">闪</h1>
    </transition>
    <p>使用enter-active-class和leave-active-class指定动画，触发过渡与动画</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "simpleanimation",
  components: {},
  data() {
    return {
      show1: true,
      show2: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    anmationClick1: function() {
      this.show1 = !this.show1;
    },
    anmationClick2: function() {
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
.square {
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;
  margin: 10px auto;
}
.slide-enter-active {
  animation: slide 0.5s;
}
.slide-leave-active {
  animation: slide 0.5s reverse;
}
@keyframes slide {
  0% {
    transform: rotate(0deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
}
.move-word-leave {
  animation: move-word 1s;
}
.move-word-enter {
  animation: move-word 1s reverse;
}
@keyframes move-word {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(30px);
  }
  30% {
    transform: translateX(-30px);
  }
  45% {
    opacity: 1;
    transform: translateX(0);
  }
  65% {
    transform: translateY(50px);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
}
</style>
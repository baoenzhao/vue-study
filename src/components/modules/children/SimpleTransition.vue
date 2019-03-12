<!--  -->
<template>
  <div id="simpletransition">
    <button @click="transitionClick">过渡</button>
    <transition
      name="my"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="square" v-if="show">来呀，打我呀</div>
    </transition>
    <p>过渡name可随意取名，随意使用css过渡</p>
    <p>钩子函数能够监听过渡事件</p>
    <img
      src="https://cn.vuejs.org/images/transition.png?_sw-precache=5990c1dff7dc7a8fb3b34b4462bd0105"
      alt="过渡过程"
    >
    <p style="text-align:center;">过渡过程</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "simpletransition",
  components: {},
  data() {
    return {
      show: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    transitionClick: function() {
      this.show = !this.show;
    },
    beforeEnter: function() {
      this.$notify({
        title: "提示",
        message: "before-enter"
      });
    },
    afterEnter: function() {
      this.$notify({
        title: "提示",
        message: "after-enter"
      });
    },
    enterCancelled: function() {
      this.$notify({
        title: "提示",
        message: "after-cancelled"
      });
    },
    beforeLeave: function () {
        this.$notify({
        title: "提示",
        message: "before-leave"
      });
    },
    leave: function () {
        this.$notify({
        title: "提示",
        message: "leave"
      });
    },
    afterLeave: function () {
        this.$notify({
        title: "提示",
        message: "after-leave"
      });
    },
    leaveCancelled: function () {
        this.$notify({
        title: "提示",
        message: "leave-cancelled"
      });
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
.my-enter-active,
.my-leave-active {
  transition: all 0.8s ease;
}
.my-enter,
.my-leave-to {
  background-color: red;
  color: white;
  opacity: 0;
}

.square {
  width: 60px;
  height: 60px;
  margin: 10px auto;
}
</style>
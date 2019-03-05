<!--  -->
<template>
  <div id="modifier">
    <button @click.prevent="method">按钮</button>
    <h1 :class="{hiden: isAnmation}">单击后的内容</h1>
    <p>修饰符可以用来快速调用触发事件，比如@click.prevent，使用修饰符之后默认click使用event.preventDefault()事件</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "modifier",
  components: {},
  data() {
    return {
      isAnmation: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    method: function() {
        this.isAnmation = true;
        var t1 = window.setTimeout(()=>{
            this.isAnmation = false;
            window.clearTimeout(t1); 
        }, 1000 * 5);   
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
@keyframes anmation {
  0% {
    color: red;
  }
  25% {
    color: yellow;
  }
  50% {
    color: blue;
  }
  100% {
    color: black;
  }
}
.hiden {
  animation: anmation 5s;
}
</style>
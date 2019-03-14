<!--  -->
<template>
  <div id="routercode">
    <button @click="goback" style="color:red;">后退</button>
    <button @click="jump1">跳转方式1</button>
    <button @click="jump2">跳转方式2</button>
    <button @click="jump3">跳转方式3</button>
    <button @click="jump4">跳转方式4</button>
    <button @click="jump5">传参方式5</button>
    <button @click="jump6">传参方式6</button>
    <button @click="goto" style="color:blue;">前进</button>
    <router-view v-center></router-view>
    <p>当使用path时，无法使用params，如果需要动态传值，可以使用router.push({ path: `/componentc/${this.title}` })</p>
    <p>replace跳转和push很像，唯一不同，push会在history中添加新记录，而replace不会添加新记录</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "routercode",
  components: {},
  data() {
    return {
      title: "方式6"
    };
  },
  computed: {},
  watch: {},
  methods: {
    jump1: function() {
      this.$router.push("/componentc/方式1");
    },
    jump2: function() {
      this.$router.push({ path: "/componentc/方式2" });
    },
    jump3: function() {
      this.$router.push({ name: "ComponentC", params: { title: "方式3" } });
    },
    jump4: function() {
      this.$router.replace({ name: "ComponentC", params: { title: "方式4" } });
    },
    jump5: function() {
      this.$router.push({ name: "ComponentD", query: { title: "方式5" } });
    },
    jump6: function() {
      this.$router.push({ path: `/componentc/${this.title}` });
    },
    goto: function() {
        this.$router.go(1);
    },
    goback: function() {
        this.$router.go(-1);
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
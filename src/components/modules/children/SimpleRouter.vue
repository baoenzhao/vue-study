<!--  -->
<template>
  <div id="simplerouter">
    <ul>
      <li>
        <router-link :to="{path: '/componenta'}">组件A</router-link>
      </li>
      <li>
        <router-link to="/componentb">组件B</router-link>
      </li>
    </ul>
    <router-view v-center></router-view>
    <p>通过router-link可以直接跳转路由，且router-link的样式就是a标签的样式，修改a标签样式即可</p>
    <p>可以通过redirect来配置子路由的默认页面</p>
    <p v-red>注意：在路由配置中需要加斜杠path: '/xxx'，如果未加斜杠path: 'xxx'，默认为跳转到根路由，而不是当前路由的下一个层级</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "simplerouter",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
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
ul li {
  display: inline-block;
  padding: 5px;
  background-color: rgb(108, 167, 204);
  border-radius: 5px;
}
li a {
  color: white;
}
</style>
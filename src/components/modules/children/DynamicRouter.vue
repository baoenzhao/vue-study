<!--  -->
<template>
<div id='dynamicrouter'>
    <ul>
      <li>
        <router-link :to="'/componenta/' + title">组件A1</router-link>
      </li>
      <li>
        <router-link :to="'/componenta/' + title">组件A2</router-link>
      </li>
      <li>
        <router-link :to="{path: '/componentb/' + title}">组件B</router-link>
      </li>
    </ul>
    修改传值：<input type="text" v-model="title">
    <router-view v-center></router-view>
    <br>
    <p>动态路由可以通过路由进行传值</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'dynamicrouter',
components: {},
data() {
return {
  title: "名称"
};
},
computed: {},
watch: {},
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
ul {
  margin-bottom: 10px;
}
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
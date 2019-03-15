<!--  -->
<template>
<div id='routerscrollbehavior'>
    <p>可以通过在路由器中配置scrollBehavior来进行每次页面进入滚动到顶部的行为</p>
    <p>这个功能只在支持 history.pushState 中可用</p>
    <p v-red>查看该源代码滚动行为移步到router.js中</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'routerscrollbehavior',
components: {},
data() {
return {

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

</style>
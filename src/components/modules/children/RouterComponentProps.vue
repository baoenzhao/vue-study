<!--  -->
<template>
<div id='routercomponentprops'>
    填写传入值：<input type="text" @change="textChange1($event.target.value)" placeholder="普通传值方法">
    <br>
    <br>
    填写传入值：<input type="text" @change="textChange2($event.target.value)" placeholder="函数传值方法">
    <router-view v-center></router-view>
    <p>还有个静态传值，对象传值就不测试了，请<a href="https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F">查看文档</a></p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'routercomponentprops',
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    textChange1: function (text) {
        this.$router.push({ path: `/componentf/${text}` });
    },
    textChange2: function (text) {
        this.$router.push({ name: "ComponentG", query: { title: text}});
    }
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
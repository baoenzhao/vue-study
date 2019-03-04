<!--  -->
<template>
<div id='vhtml'>
    <input style="width:400px;overflow:auto;resize:both;" type="textarea" v-model="content">
    <div v-html="content">
    </div>
    <p>v-html可以将变量的内容变为html标签，尝试在输入框中输入html语句，改变上方内容渲染</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'vhtml',
components: {},
data() {
return {
    content: "<p>我是html内容<p>"
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
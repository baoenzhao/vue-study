<!--  -->
<template>
<div id='dynamicstyle'>
    <h1 :style="style">动态样式</h1>
    <p>动态样式与动态class类似，使用方法有内联，对象，计算属性，数组等等</p>
    <p>使用动态样式时，短横线会将用驼峰代替，如background-color为backgroundColor</p>
    <p>当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'dynamicstyle',
components: {},
data() {
return {
    style: {
        color: "white",
        backgroundColor: "red",
        border: "10px solid black"
    }
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
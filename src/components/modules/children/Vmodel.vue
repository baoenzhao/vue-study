<!--  -->
<template>
<div id='vmodel'>
    <input style="width:200px;" type="text" v-model="value1"> 
    <span>  变量：{{value1}}</span>
    <br/>
    <br/>
    <p style="color:red;">尝试改变输入框中的值，输入框后的变量也会随之改变</p>
    <p>v-model与v-bind类似，将标签属性与变量绑定，区别在于，v-model为双向绑定</p>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name:'vmodel',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
return {
    value1: "我通过v-model绑定了value",
};
},
//计算属性
computed: {},
//监控data中的数据变化
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
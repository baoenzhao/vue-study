<!--  -->
<template>
<div id='vbind'>
    <input style="width:200px;" type="text" v-bind:value="value1"> 
    <span>  变量1：{{value1}}</span>
    <br/>
    <br/>
    <input style="width:200px;" type="text" :value="value2"><span>  变量2：{{value2}}</span>
    <br/>
    <br/>
    <p>v-bind可以绑定标签属性，使标签属性和变量进行绑定，不过是单向绑定，当标签上的值改变时，变量不会改变</p>
    <p style="color:red;">尝试修改输入框中的值，输入框后面的变量不会进行改变</p>
    <p>v-bind可以简写成:</p>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name:'vbind',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
return {
    value1: "我通过v-bind绑定了value",
    value2: "我通过:绑定了value"
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
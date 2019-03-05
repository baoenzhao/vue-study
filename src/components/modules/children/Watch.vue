<!--  -->
<template>
<div id='watch'>
    <input type="text" placeholder="输入内容改变变量" v-model="name">
    <h1>{{name}}</h1>
    <div v-html="content"></div>
    <p>侦听属性可以监听数据变化，当属性变化时，侦听属性就会执行</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'watch',
components: {},
data() {
return {
    name: "我是变量",
    content: ""
};
},
computed: {},
watch: {
    name: function (newValue, oldValue) {
        this.name = newValue;
        this.content = "<h1>新的值:" + newValue + " " + "旧的值:" + oldValue + "</h1>";
    }
},
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
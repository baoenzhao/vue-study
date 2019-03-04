<!--  -->
<template>
<div id='vonce'>
    <h1 v-once>使用了v-once：{{message}}<p style="text-align:center;color:red;">我是子元素{{message}}</p></h1>
    <h1>未使用v-once：{{message}}<p style="text-align:center;color:red;">我是子元素{{message}}</p></h1>
    <input type="text" v-model="message">
    <p>使用了v-once的元素，只会渲染一次，而未使用的，会随着变量的改变而改变内容</p>
    <p>v-once使用之后，其子元素也会被影响</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'vonce',
components: {},
data() {
return {
    message: "初始内容"
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
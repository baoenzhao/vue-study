<!--  -->
<template>
<div id='vmodelcom'>
    <check-com v-model="fruit"></check-com>
    <h1>我爱吃{{fruit}}</h1>
    <p>v-model是一颗语法糖，使用v-model即使用了v-on:input v-bind:value这两个方法，因此在组件中，去操作这两个方法即可</p>
    <p>@input="$emit('input', $event.target.value)：绑定input事件，当组件中的input被触发，即发送事件和input上的值</p>
    <p>:value：将父组件v-model的值绑定在此处，如果启用该绑定，需要在公共参数中加上value，props: ["value"]</p>
    <p style="color:red;">该案例未:value绑定，因此不需要加公共参数value</p>
    <p style="color:red;">this.$emit('input', 值);这个方法可以发送默认值给父组件v-model绑定的值</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import CheckCom from '../../views/CheckCom'

export default {
name:'vmodelcom',
components: {
    CheckCom
},
data() {
return {
    fruit: ""
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
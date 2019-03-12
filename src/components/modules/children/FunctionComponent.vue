<!--  -->
<template>
<div id='functioncomponent'>
    <function-com param="3">
        <li>a</li>
        <li>b</li>
        <li>c</li>
    </function-com>
    <p>使用函数式组件，无状态无实例，提高了渲染速度</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import FunctionCom from '../../views/FunctionCom'

export default {
name:'functioncomponent',
components: {
    FunctionCom
},
data() {
return {
    style: "2"
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
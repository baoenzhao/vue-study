<!--  -->
<template>
<div id='isinsidecom'>
    <ul>
        <li is="li-com">内容1</li>
        <li is="li-com">内容2</li>
        <li is="li-com">内容3</li>
    </ul>
    <p>{{message}}</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import LiCom from '../../views/LiCom'

export default {
name:'isinsidecom',
components: {
    LiCom
},
data() {
return {
    message: "用is之后，在诸如<ul>、<ol>、<table> 和 <select>的内部可以直接使用组件"
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
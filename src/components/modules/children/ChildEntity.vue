<!--  -->
<template>
<div id='childentity'>
    <input-inside ref="child"></input-inside>
    <button style="margin:10px auto;" @click="onFocus">父组件获取焦点按钮</button>
    <p>通过ref特性获取组件，并调用组件的公共方法</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import InputInside from '../../views/InputInside'

export default {
name:'childentity',
components: {
    InputInside
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    onFocus: function () {
        this.$refs.child.focus();
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
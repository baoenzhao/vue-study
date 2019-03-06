<!--  -->
<template>
<div id='emitcom'>
    <close-com @close="closeMethod"></close-com>
    <p>触发事件后，发送消息到父组件，父组件即可做出相应逻辑</p>
    <p>在发送事件时，子组件可以将组件内的内容以参数的方式发送到父组件</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import CloseCom from '../../views/CloseCom'

export default {
name:'emitcom',
components: {
    "close-com": CloseCom
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    closeMethod: function (param) {
        this.$notify({
          title: '提示',
          message: param,
        });
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
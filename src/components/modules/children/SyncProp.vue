<!--  -->
<template>
<div id='synsprop'>
    <content-com :content.sync="content"></content-com>
    <textarea class="left" placeholder="输入内容" v-model="content"></textarea>
    <p>双向绑定后，不管父组件还是子组件，其值都会被改变</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import ContentCom from '../../views/ContentCom'

export default {
name:'synsprop',
components: {
    ContentCom
},
data() {
return {
    content: ""
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
.left {
    display: flex;
}

</style>
<!--  -->
<template>
<div id='vuexstate'>
    <h1>这个是store中的状态：{{nickname}}</h1>
    <p>通过store获取状态</p>
    <br>
    输入内容更新状态：<input type="text" name="nickname" v-model="nickname">
    <p>通过store.commit来进行值修改</p>
    <p v-red>store的状态是全局缓存的，更换页面后回来，数据还是最新的数据，但并不存在于存储空间中，所以重启后还是会回到初始数据</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'vuexstate',
components: {},
data() {
return {
};
},
computed: {
    nickname: {
        get: function () {
            return this.$store.state.nickname;
        },
        set: function (value) {
            this.$store.commit('changeNickname', value);
        }
    }
},
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
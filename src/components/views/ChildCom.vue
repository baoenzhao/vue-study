<!--  -->
<template>
<div id='child-com'>
    <button class="btn" @click="parentMethod">子组件按钮</button>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'child-com',
components: {},
inject: ['randomNumber'],//获取父组件中的方法
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    parentMethod: function () {
        this.randomNumber();//触发父组件传递的方法
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
.btn {
    margin: 10px auto;
}

</style>
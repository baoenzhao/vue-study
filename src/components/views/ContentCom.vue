<!--  -->
<template>
<div id='content-com'>
    <div class="content">{{content}}</div>
    <button class="left" @click="clear">清除</button>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'content-com',
props: {
    content: ""
},
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
    clear: function() {
        this.$emit('update:content', "");
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
.content {
    width: 200px;
    height: 200px;
    overflow: scroll;
    background-color: rgb(255, 255, 255);
    text-align: left;
    word-wrap:break-word;
}
.left {
    display: flex;
}
</style>
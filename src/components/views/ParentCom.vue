<!--  -->
<template>
<div id='parent-com'>
    <ul>
        <li v-for="n in m" :key="n">
            {{n}}
        </li>
    </ul>
    <slot></slot>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'parent-com',
components: {},
data() {
return {
    m: 10
};
},
provide () {//该属性可以提供给子组件方法
    return {
        randomNumber: this.randomNumber
    }
},
computed: {},
watch: {},
methods: {
    randomNumber: function () {
        this.m = Math.ceil(Math.random()*10);
        this.$notify({
          title: '提示',
          message: '成功触发父组件随机数字方法',
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
li {
    display: inline-block;
    padding: 5px;
    margin: 0px 5px;
    border: 0.5px solid black;
}
</style>
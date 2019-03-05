<!--  -->
<template>
<div id='computer'>
    <h1>{{getStr}}</h1>
    <input type="text" v-model="text" placeholder="尝试输入内容改变变量">
    <p>计算属性可以进行方法调用，与methods中的方法类似</p>
    <p>不同于methods中的方法，计算属性拥有缓存机制，只有在其中的变量改变时才会执行，而methods中的方法调用一次就会执行一次</p>
    <br>
    <br>
    <p>由于计算属性的缓存机制，计算属性适合使用setter和getter方法</p>
    <p>使用计算属性实现getter和setter方法 <input type="text" placeholder="输入内容触发setter方法" @input="inputChange"></p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'computer',
components: {},
data() {
return {
    text: ""
};
},
computed: {
    getStr: function () {
        return this.text + "我是计算属性的方法内部";
    },
    text2: {
        get: function () {
            return this.text;
        },
        set: function (value) {
            this.text = value;
        }
    }
},
watch: {},
methods: {
    inputChange: function (event) {
        this.text2 = event.target.value;
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
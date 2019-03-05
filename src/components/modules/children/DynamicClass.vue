<!--  -->
<template>
<div id='dynamicclass'>
    <h1 :class="{error:error}">使用内联</h1>
    <h1 :class="classobj">使用对象</h1>
    <h1 :class="classcom">使用计算属性</h1>
    <button @click="change">改变class</button>
    <p style="color:red;">注意：在使用计算属性时，请返回一个对象</p>
    <br>
    <br>
    <h1 :class="arr">使用数组语法1</h1>
    <h1 :class="[arr[0], arr[1]]">使用数组语法2</h1>
    <p>普通class绑定的方式，数组语法都能够使用</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'dynamicclass',
components: {},
data() {
return {
    error: false,
    classobj: {
        "error": false
    },
    errorCom: {
        "error": false
    },
    arr: [
        "error",
        "mark"
    ]
};
},
computed: {
    classcom: function () {
        return this.errorCom;
    }
},
watch: {},
methods: {
    change: function () {
        this.error = !this.error;
        this.classobj.error = !this.classobj.error;
        this.errorCom.error = !this.errorCom.error;
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
.error {
    background-color: rgb(180, 34, 34);
    color: white;
}
.mark {
    text-align: left;
    box-shadow: 5px 5px black;
    margin: 10px 5px;
}
</style>
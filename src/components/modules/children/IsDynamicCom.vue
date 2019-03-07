<!--  -->
<template>
<div id='isdynamiccom'>
    <ul >
        <li class="nav"><button class="button" @click="method1">组件1</button></li>
        <li class="nav"><button class="button" @click="method2">组件2</button></li>
        <li class="nav"><button class="button" @click="method3">组件3</button></li>
    </ul>
    <div class="com">
        <component :is="currentCom" v-model="fruit" @close="closeMethod">插槽内容</component>
        <h1 v-show="showFruit">我爱吃{{fruit}}</h1>
    </div>
    <p>:is 绑定可以动态改变组件，组件不会复用，每次都会重新渲染</p>
    <p>动态改变组件的变量可以是字符串，也可以是一个组件对象</p>
    <br>
    <p style="color:red;">{{message}}</p>
    <p>下面是缓存了组件的内容</p>
    <keep-alive>
        <div class="com">
        <component :is="currentCom" v-model="fruit" @close="closeMethod">插槽内容</component>
        <h1 v-show="showFruit">我爱吃{{fruit}}</h1>
    </div>
    </keep-alive>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import CheckCom from '../../views/CheckCom'
import FunnyCom from '../../views/FunnyCom'
import CloseCom from '../../views/CloseCom'

export default {
name:'isdynamiccom',
components: {
    CheckCom,
    FunnyCom,
    CloseCom
},
data() {
return {
    currentCom: "check-com",
    fruit: "",
    showFruit: true,
    message: "如果想要缓存组件，而不是每次进行重新渲染，可以使用<keep-alive></keep-alive>包裹"
};
},
computed: {},
watch: {},
methods: {
    method1: function () {
        this.currentCom = "check-com";
        this.showFruit = true;
    },
    method2: function () {
        this.currentCom = "funny-com";
        this.showFruit = false;
    },
    method3: function () {
        this.currentCom = CloseCom;
        this.showFruit = false;
    },
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
.nav {
    display: inline;
    text-align: center;
}
.button {
    font-size: 25px;
}
.com {
    margin: 10px 0px;
    background-color: rgb(176, 235, 240);
    box-shadow: 0px 3px 5px rgb(119, 119, 119);
}
</style>
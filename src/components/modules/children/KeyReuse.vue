<!--  -->
<template>
<div id='keyreuse'>
    <template v-if="style1 === 'A'">
        <label for="A">A</label>
        <input type="text" name="A" id="A">
    </template>
    <template v-else-if="style1 === 'B'">
        <label for="B">B</label>
        <input type="text" name="B" id="B">
    </template>
    <button @click="changeStyle1">改变样式</button>
    <p>在没有使用key之前，再改变v-if条件显示时，元素将被复用，所以值将会保留</p>
    <template v-if="style2 === 'A'">
        <label for="A">A</label>
        <input type="text" name="A" key="A">
    </template>
    <template v-else-if="style2 === 'B'">
        <label for="B">B</label>
        <input type="text" name="B" key="B">
    </template>
    <button @click="changeStyle2">改变样式</button>
    <p>用了key之后，每次使用v-if改变条件来显示时，元素会被重新创建，值不会被保留</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'keyreuse',
components: {},
data() {
return {
    style1: "A",
    style2: "B"
};
},
computed: {},
watch: {},
methods: {
    changeStyle1: function () {
        this.style1 = this.style1 == "A" ? "B" : "A";
    },
    changeStyle2: function () {
        this.style2 = this.style2 == "A" ? "B" : "A";
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
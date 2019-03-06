<!--  -->
<template>
<div id='inputlisteners'>
    <input-inside v-model="value" @focus="onFocus" @change="onChange"></input-inside>
    <h1>{{value}}</h1>
    <p>该方式用于父组件监听子组件内部的input事件</p>
    <p>this.$listeners中包含各类原生事件监听</p>
    <p>如果要覆盖原生监听，可以在组件内部重写事件方法</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import InputInside from '../../views/InputInside'

export default {
name:'inputlisteners',
components: {
    InputInside
},
data() {
return {
    value: ""
};
},
computed: {},
watch: {},
methods: {
    onFocus: function() {
        this.$notify({
          title: '提示',
          message: '焦点已经聚焦',
        });
    },
    onChange: function() {
        this.$notify({
          title: '提示',
          message: '内容已经改变',
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
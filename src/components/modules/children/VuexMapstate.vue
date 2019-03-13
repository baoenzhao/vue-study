<!--  -->
<template>
<div id='vuexmapstate'>
    <ul>
        <li>名字：{{nickname}}</li>
        <li>性别：{{sex}}</li>
        <li>年龄：{{age}}</li>
    </ul>
    <p>通过mapState语法糖可以快速建立计算属性，获取state</p>
    <p v-red>使用此类语法糖必须将store注入到全局Vue中，mapState，mapGetters，mapMutations等</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { mapState } from 'vuex'

export default {
name:'vuexmapstate',
components: {},
data() {
return {

};
},
computed: {
    ...mapState({//通过mapState快速获取state
        nickname: state => state.nickname,//方式1
        sex: 'sex',//方式2
    }),
    ...mapState([
        'age'//方式3，当参数名跟store中state的名称一样时可以这样使用
    ])
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
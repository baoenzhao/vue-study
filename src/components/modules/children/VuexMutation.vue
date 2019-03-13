<!--  -->
<template>
<div id='vuexmutation'>
    修改谈话内容：<input ref="content" type="text" :value="say">
    <button @click="changeSay1">修改1</button>
    <button @click="changeSay2">修改2</button>
    <p>{{hello()}}</p>
    <br>
    <p>第一个按钮使用字符串进行修改，第二个使用常量进行修改</p>
    <p>mutations是同步的</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { FUNCTION } from '../../../data/const'

export default {
name:'vuexmutation',
components: {},
data() {
return {

};
},
computed: {
    ...mapState([
        'say'
    ]),
    ...mapGetters([
        'hello'
    ])
},
watch: {},
methods: {
    changeSay1: function () {
        this.$store.commit('changeSay', this.$refs.content.value);
    },
    changeSay2: function () {
        this.$store.commit(FUNCTION.CHANGE_SAY, this.$refs.content.value);
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
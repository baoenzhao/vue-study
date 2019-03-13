<!--  -->
<template>
  <div id="vuexmapmutations">
    <h1>{{nickname}}现在已经{{age}}岁了</h1>更换昵称：
    <input type="text" :value="nickname" @change="changeName($event.target.value)">
    更换年龄：
    <input type="text" :value="age" @change="changeAge($event.target.value)">
    <br>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  name: "vuexmapmutations",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["age", "nickname"])
  },
  watch: {},
  methods: {
    ...mapMutations(["changeAge"]),
    ...mapMutations({
      changeName: "changeNickname"
    })
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
</style>
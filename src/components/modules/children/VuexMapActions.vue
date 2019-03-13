<!--  -->
<template>
  <div id="vuexmapactions">
    更改昵称：
    <input type="text" :value="nickname" @change="changeNickname($event.target.value)">
    更改年龄：
    <input type="text" :value="age" @change="editAge($event.target.value)">
    <br>
    <h1>我是{{nickname}}，今年{{age}}岁</h1>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "vuexmapactions",
  components: {},
  data() {
    return {};
  },
  computed: {
      ...mapState(["nickname", "age"])
  },
  watch: {},
  methods: {
    ...mapActions(["changeNickname"]),
    ...mapActions({
      editAge: "changeAge"
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
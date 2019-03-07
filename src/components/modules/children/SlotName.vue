<!--  -->
<template>
  <div id="slotname">
    <slot-name-com>
      <template #header>父组件头部内容</template>主体内容
      <template v-slot:footer>父组件尾部内容</template>主体内容2
    </slot-name-com>
    <p>{{message}}</p>
    <p>未被包裹在template中的内容，会被默认为默认插槽内的内容</p>
    <p style="color:red;">使用#缩写v-slot:</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import SlotNameCom from "../../views/SlotNameCom";

export default {
  name: "slotname",
  components: {
    SlotNameCom
  },
  data() {
    return {
        message: "一个不带 name 的 <slot> 出口会带有隐含的名字“default”。"
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
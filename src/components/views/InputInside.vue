<!--  -->
<template>
  <div id="input-inside">
    <label for="inside">我是组件的标题</label>
    <input
      ref="input"
      :value="value"
      v-on="inputListerners"
      v-bind="$attrs"
      type="text"
      name="inside"
      id="inside"
      placeholder="输入内容"
    >
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "input-inside",
  props: {
    value: String
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    inputListerners: function() {
      var self = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          self.$emit("input", event.target.value); //配合使用v-model
        }
      });
    }
  },
  watch: {},
  methods: {
    focus: function () {//公开方法，可以让父组件进行调用
      this.$refs.input.focus();
    }
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
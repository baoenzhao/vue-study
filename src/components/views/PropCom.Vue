<!--  -->
<template>
  <div id="prop-com">
    <ul>
      <li>参数1：{{param1}}</li>
      <li>参数2：{{param2}}</li>
      <li>参数3：{{param3}}</li>
      <li>参数4：{{param4}}</li>
      <li>参数5：{{param5.message}}</li>
      <li>参数6：{{param6}}</li>
    </ul>

    <p>type：类型</p>
    <p>required：是否必须</p>
    <p>default：默认值</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "prop-com",
  props: {
    param1: String,
    param2: [String, Number],
    param3: {
      type: String,
      required: true
    },
    param4: {
      type: String,
      default: "我是默认内容"
    },
    param5: {
      type: Object,
      default: function() {
        return { message: "工厂模式的参数" };
      }
    },
    param6: {//暂时不知道如何使用这个参数
      getStr: function(value) {
        return value > 1 ? "大于1" : "不大于1";
      }
    }
  },
  components: {},
  data() {
    return {};
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
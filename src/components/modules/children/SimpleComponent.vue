<!--  -->
<template>
  <div id="simplecomponent">
      <simplecom title="情报人员列表" :arr="arr"></simplecom>
      <br/>
      <p>使用了一个简单的组件进行显示</p>
  </div>
</template>

<script>
import SimpleCom from '../../views/SimpleCom';

export default {
  name: "simplecomponent",
  components: {
      "simplecom": SimpleCom
  },
  data() {
    return {
        arr: [
            {
                id: "J326",
                name: "杰克"
            },
            {
                id: "B843",
                name: "马里奥"
            },
            {
                id: "A952",
                name: "泰斯"
            },
            {
                id: "U821",
                name: "马尔斯"
            }
        ]
    }
  },
  computed: {},
  watch: {},
  methods: {

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
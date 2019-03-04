<!--  -->
<template>
  <div id="lifemethod">
    <div v-html="content"></div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "lifemethod",
  components: {},
  data() {
    return {
      content: ""
    };
  },
  computed: {},
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.content += "<p>创建完成，通过接口获取数据的操作大部分在此完成</p>";
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      this.content += "<p>挂载完成，可以访问DOM元素，例如charts需要获取元素document.getElementById(ID)，之后进行创建</p>";
  },
  beforeCreate() {
      console.log("创建之前，无法使用this");
  }, //生命周期 - 创建之前
  beforeMount() {
      this.content += "<p>挂载之前</p>";
  }, //生命周期 - 挂载之前
  beforeUpdate() {
    //   this.content += "<p>更新之前</p>";
  }, //生命周期 - 更新之前
  updated() {
    //   this.content += "<p>更新之后</p>";
  }, //生命周期 - 更新之后
  beforeDestroy() {
      this.content += "<p>销毁之前</p>";
  }, //生命周期 - 销毁之前
  destroyed() {
      this.content += "<el-alert title='销毁完成' type='success'></el-alert>";
  }, //生命周期 - 销毁完成
  activated() {
      this.content += "<p>活跃期</p>";
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
</style>
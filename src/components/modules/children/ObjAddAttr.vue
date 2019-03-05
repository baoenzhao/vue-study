<!--  -->
<template>
  <div id="objaddattr">
    <button @click="addAge">添加年龄</button>
    <button @click="addSex">添加性别</button>
    <button @click="addTelAndFrom">添加电话和籍贯</button>
    <h1>name {{obj.name}}</h1>
    <h1>age {{obj.age}}</h1>
    <h1>sex {{obj.sex}}</h1>
    <h1>tel {{obj.tel}}</h1>
    <h1>from {{obj.from}}</h1>
    <p style="color:red;">以上动态添加属性的方法都是响应式的，会渲染元素</p>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import Vue from "vue";

export default {
  name: "objaddattr",
  components: {},
  data() {
    return {
      obj: {
        name: "杰克"
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    addAge: function() {
      Vue.set(this.obj, "age", 10);
    },
    addSex: function() {
      this.$set(this.obj, "sex", "男");
    },
    addTelAndFrom: function() {
        this.obj = Object.assign({}, this.obj, {
            tel: "13564243243",
            from: "浙江"
        });
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
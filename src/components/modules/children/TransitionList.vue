<!--  -->
<template>
  <div id="transitionlist">
    <button @click="add">添加</button>
    <!-- <button @click="shuffle">shuffle</button> -->
    <transition-group name="list-complete" tag="p">
      <span v-for="item in items" :key="item" class="list-complete-item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "transitionlist",
  components: {},
  data() {
    return {
      items: [0, 1, 2, 3, 4, 5]
    };
  },
  computed: {},
  watch: {},
  methods: {
    // shuffle: function() {
    //   this.items = _.shuffle(this.items);
    // },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.randomIndex());
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
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
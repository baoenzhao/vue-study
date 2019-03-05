<!--  -->
<template>
  <div id="vfor">
    <ul>
      <template>
        <li v-for="(obj, index) in list" :key="index">{{index + 1}}:{{obj.name}} {{obj.price}}</li>
      </template>
    </ul>
    <p>v-for可以像数组循环一样，将数组变量遍历出来，然后将标签创建出来</p>
    <p>v-for使用时，可以创建一个形参，如果obj，也可以创建一个形参和一个下标形参，如(obj, index)，如此一来可以获取对象及对象的所在下标</p>
    <p style="color:red;">除了下标可以获取外，还可以获取键值对,(val, key)，如下</p>
    <p v-for="(val, key, index) in list[0]" :key="key">下标：{{index}}； 键：{{key}}； 值：{{val}}</p>
    <br/>
    <p>目前，使用v-for时需要绑定key才能使用<em>:key</em></p>
    <p>:key的使用，可以优化标签的复用，尽量使用唯一id，如果没有，凑活用其他方式</p>
  </div>
</template>

<script>
export default {
  name: "vfor",
  components: {},
  data() {
    return {
      list: [
        { name: "苹果", price: "10元/斤" },
        { name: "香蕉", price: "6.5元/斤" },
        { name: "菠萝", price: "23元/斤" },
        { name: "草莓", price: "50元/斤" },
        { name: "车厘子", price: "80元/斤" }
      ]
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
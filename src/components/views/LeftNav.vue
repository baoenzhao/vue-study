<!--  -->
<template>
  <div id="left-nav">
    <div class="nav">
      <ul>
        <li
          v-for="(obj, index) in list"
          :key="index"
          :class="{show:obj.show}"
          @click="navClick(index)"
        >
          <router-link :class="{show:obj.show}" to>{{obj.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavData from "@/data/NavData";

export default {
  name: "left-nav",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      list: NavData,
      selectedIndex: 0
    };
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
  watch: {
    selectedIndex: function(val) {}
  },
  methods: {
    navClick: function(index) {
      for (var i = 0; i < this.list.length; i++) {
        var obj = this.list[i];
        if (i == index) obj.show = true;
        else obj.show = false;
      }
      this.selectedIndex = index;
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
ul {
  list-style-type: none;
  width: 200px;
}
li {
  color: black;
  text-align: center;
  border-bottom: 0.5px solid lightgray;
  background-color: white;
}
li.show {
  color: white;
  background-color: teal;
}
a {
  display: block;
  padding: 10px;
  font-size: 20px;
}
a.show {
  color: white;
}
a:hover {
  text-decoration: none;
  /* background-color: rgb(238, 238, 238); */
}
/* a:active {
  text-decoration: none;
  background-color: teal;
  color: white;
} */
.nav {
  width: 200px;
  height: 600px;
  overflow: scroll;
  background: white;
}
</style>
<template>
  <div id="“home”">
    <!-- <left-nav></left-nav> -->
    <el-row type="flex" justify="space-between">
      <el-col :span="4">
        <div class="col">
          <el-menu class="main-menu" router="router" :default-active="$route.path">
            <el-submenu class="sub-menu" v-for="(obj, index1) in list" :key="index1" :index="index1.toString()">
              <template slot="title">
                <span>{{obj.name}}</span>
              </template>
              <el-menu-item-group v-if="obj.sub.length > 0 ? true : false">
                <el-menu-item
                  v-for="(sub, index2) in obj.sub"
                  :key="index2"
                  :index="sub.path"
                >{{sub.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="col">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import LeftNav from '../views/LeftNav'
import NavData from "@/data/NavData";

export default {
  name: "home",
  //import引入的组件需要注入到对象中才能使用
  components: {
    // "left-nav": LeftNav,
  },
  data() {
    return {
      list: NavData
    };
  },
  //计算属性
  computed: {},
  //监控data中的数据变化
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
.col {
  overflow: scroll;
  height: 800px;
}
.main-menu {
  background-color: rgb(212, 247, 179);
}

</style>
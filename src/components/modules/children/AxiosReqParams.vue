<!--  -->
<template>
  <div id="axiosreqparams">
    <el-input class="search-input" placeholder="请输入诗人名字" v-model="poetName"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
    <div class="contain">
      <div class="background" v-show="show" v-for="val in data" :key="val.name">
        <h1>{{val.name}}</h1>
        <p>{{val.desc}}</p>
      </div>
    </div>
    <p>get请求时，添加参数需要params: {}包含</p>
    <p>post请求时，添加参数只需要{}包含</p>
    <br>
    <br>
    <p v-red>拦截器</p>
    <pre style="text-align:left;">
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    </pre>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  name: "axiosreqparams",
  components: {},
  data() {
    return {
      name: "",
      data: null,
      show: false
    };
  },
  computed: {
    poetName: {
      set: function(val) {
        this.name = val;
      },
      get: function() {
        return this.name;
      }
    }
  },
  watch: {},
  methods: {
    searchClick: function() {
      this.$http
        .get("https://api.apiopen.top/searchAuthors?", {
          params: { name: this.name }
        })
        .then(response => {
          this.data = response.data.result;
          this.show = true;
        })
        .catch(error => {
          this.show = false;
        })
        .finally(() => {});
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
.search-input {
  display: inline-block;
  width: 30%;
}
.background {
  background: linear-gradient(rgb(69, 193, 224, 0.5), rgb(42, 124, 145, 1));
  overflow: scroll;
  border-radius: 5px;
  box-shadow: 2px 2px 2px gray;
  width: 200px;
  height: 300px;
  color: white;
  margin: 10px 10px;
}
.contain {
  display: flex;
  justify-content: center;
}
</style>
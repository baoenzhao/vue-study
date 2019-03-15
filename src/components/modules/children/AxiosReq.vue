<!--  -->
<template>
<div class="contain" id='axiosreq'>
    <div class="title">比特币实时汇率</div>
    <div class="block" v-for="(val, key) in this.data" :key="key">
        <h1>{{key}} <span class="small">{{val.description}}</span></h1>
        <p>价格：{{val | unit}}</p>
        <p>倍率：{{val.rate_float}}</p>
    </div>
    <p></p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'axiosreq',
components: {},
filters: {
    unit: function (value) {
        if (value.code == "USD") return "$" + value.rate;
        else if (value.code == "GBP") return "£" + value.rate;
        else if (value.code == "EUR") return "€" + value.rate;
    }
},
data() {
return {
    data: null
};
},
computed: {},
watch: {},
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json', {}).then(response => {
        this.data = response.data.bpi;
    }).catch(error => {
        console.log("请求错误");
    }).finally(() => {
        console.log("结束处理");
    });
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.contain {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}
.block {
    width: 250px;
    background-color: rgb(122, 73, 202);
    color: white;
    text-align: left;
    margin: 10px 20px;
    border-radius: 3px;
    padding: 5px;
}
.small {
    font-size: 0.5em;
    color: rgb(170, 166, 166);
}
.title {
    color: white;
    text-align: center;
    background-color: rgb(122, 73, 202);
    font-size: 30px;
    font-weight:bold;
    border-radius: 3px;
    width: 80%;
    padding: 10px;
}

</style>
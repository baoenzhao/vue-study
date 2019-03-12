<!--  -->
<script>
//import 《组件名称》 from '《组件路径》';

export default {
name:'function-com',
functional: true,
props: {
    param: {
        type: String,
        required: true
    }
},
render: function (createElement, context) {
    function judgeStyle() {
        var param = context.props.param;
        switch (param) {
            case "0": 
            return 'div';
            break;
            case "1": 
            return 'p';
            break;
            case "2": 
            return 'input';
            case "3": 
            return 'ul';
            break;
            default:
            return 'img';
            break;
        }
    }

    return createElement(
        judgeStyle(),
        context.data,
        context.children
    )
},
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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

</style>
<!--  -->
<template>
<div id='slotrange'>
    <slot-range-com>
    </slot-range-com>
    <slot-range-com v-slot:default="props">
        {{props.goods.price}}
    </slot-range-com>
    <p>通过v-slot:default获取子组件中对象的内容，'props'为形参，名字可以随便取</p>
    <br>
    <slot-range-com v-slot="props">
        {{props.goods.price}}
    </slot-range-com>
    <p>v-slot:default= 可以简写成 v-slot=</p>
    <p>{{message}}</p>
    <br>
    <slot-range-com v-slot="{ goods }">
        {{goods.price}}
    </slot-range-com>
    <p>解构插槽，使用{ goods }无需进行形参传入</p>
    <br>
    <slot-range-com v-slot="{ goods: swtich }">
        {{swtich.price}}
    </slot-range-com>
    <p>解构插槽，并重命名参数名</p>
    <br>
    <slot-range-com #default="{ goods }">
        {{goods.price}}
    </slot-range-com>
    <p>使用#缩写解构插槽，使用#必须带参数，不可写成#=""</p>
    <br>
    <slot-list-com :games="games">
        <template #game="{ game }">
            名称：{{game.name}} 类型：{{game.type}}
            <img class="icon" :alt="game.name" :src="game.url"/>
        </template>
    </slot-list-com>
    <p>使用作用域+具名实现父组件数组传入，遍历数据</p>
</div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import SlotRangeCom from '../../views/SlotRangeCom'
import SlotListCom from '../../views/SlotListCom'

export default {
name:'slotrange',
components: {
    SlotRangeCom,
    SlotListCom
},
data() {
return {
    message: "只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法",
    games: [
            {
                name: "Monster Hunter xx",
                type: "ARPG",
                url: require("@/assets/MH_icon.jpg")
            },
            {
                name: "Super Mario Maker 2",
                type: "ACT",
                url: require("@/assets/SMM2_icon.jpg")
            },
            {
                name: "Gyakuten Saiban 3",
                type: "ACE",
                url: require("@/assets/GS3_icon.jpg")
            },
            {
                name: "Minecraft",
                type: "Sandbox",
                url: require("@/assets/Minecraft_icon.jpg")
            }
        ]
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
.icon {
    width: 80px;
}

</style>
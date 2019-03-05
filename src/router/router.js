import Vue from 'vue'
import VueRouter from 'vue-router'//引用路由
import Home from '@/components/modules/Home'
import Evaluate from '@/components/modules/children/Evaluate'
import Vbind from '@/components/modules/children/Vbind'
import Vmodel from '@/components/modules/children/Vmodel'
import Vif from '@/components/modules/children/Vif'
import Vshow from '@/components/modules/children/Vshow'
import Vfor from '@/components/modules/children/Vfor'
import Von from '@/components/modules/children/Von'
import SimpleComponent from '@/components/modules/children/SimpleComponent'
import LifeMethod from '@/components/modules/children/LifeMethod'
import Vonce from '@/components/modules/children/Vonce'
import Vhtml from '@/components/modules/children/Vhtml'
import Dynamicparam from '@/components/modules/children/Dynamicparam'
import Modifier from '@/components/modules/children/Modifier'
import Computer from '@/components/modules/children/Computer'
import Watch from '@/components/modules/children/Watch'
import DynamicClass from '@/components/modules/children/DynamicClass'

Vue.use(VueRouter)//使用路由

const router = new VueRouter({
    // mode:"history",//路由时去掉#
    routes: [
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "evaluate",
                    component: Evaluate
                },
                {
                    path: "vbind",
                    component: Vbind
                },
                {
                    path: "vmodel",
                    component: Vmodel
                },
                {
                    path: "vif",
                    component: Vif
                },
                {
                    path: "vshow",
                    component: Vshow
                },
                {
                    path: "vfor",
                    component: Vfor
                },
                {
                    path: "von",
                    component: Von
                },
                {
                    path: "simplecomponent",
                    component: SimpleComponent
                },
                {
                    path: "lifemethod",
                    component: LifeMethod
                },
                {
                    path: "vonce",
                    component: Vonce
                },
                {
                    path: "vhtml",
                    component: Vhtml
                },
                {
                    path: "dynamicparam",
                    component: Dynamicparam
                },
                {
                    path: "modifier",
                    component: Modifier
                },
                {
                    path: "computer",
                    component: Computer
                },
                {
                    path: "watch",
                    component: Watch
                },
                {
                    path: "dynamicclass",
                    component: DynamicClass
                }
            ]
        }//Path 路径 component 相应的组件 
    ]
})

router.afterEach((to, from, next)=>{
    window.scroll(0, 0);//跳转到顶部
})

export default router
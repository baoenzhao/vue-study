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
                }
            ]
        }//Path 路径 component 相应的组件 
    ]
})

export default router
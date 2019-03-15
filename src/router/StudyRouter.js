import ComponentA from '../components/views/ComponentA'
import ComponentB from '../components/views/ComponentB'
import ComponentC from '../components/views/ComponentC'
import ComponentD from '../components/views/ComponentD'

//简单组件
const children1 = [
    {
        path: '/componenta',
        component: ComponentA
    },
    {
        path: '/componentb',
        component: ComponentB
    }
]
//动态路由
const children2 = [
    {
        path: '/componenta/:title',
        component: ComponentA
    },
    {
        path: '/componentb/:title',
        component: ComponentB,
        name: ComponentB
    }
]
//编程式导航
const children3 = [
    {
        path: '/componentc/:title',
        component: ComponentA,
        name: 'ComponentC'
    },
    {
        path: '/componentd',
        component: ComponentC,
        name: 'ComponentD'
    }
]
//命名视图
const children4 = [
    {
        path: '/componente',
        component: ComponentD,
        name: 'ComponentE',
        redirect: '/nameview',
        children: [
            {
                path: '/nameview',
                components: {
                    default: ComponentA,
                    b: ComponentB,
                    c: ComponentC
                }
            }
        ]
    },
]
//编程式导航
const children5 = [
    {
        path: '/componentf/:title',
        component: ComponentA,
        props: true
    },
    {
        path: '/componentg',
        component: ComponentA,
        name: 'ComponentG',
        props: (route) => ({ title: route.query.title })
    }
]

const sub = {
    children1: children1,
    children2: children2,
    children3: children3,
    children4: children4,
    children5: children5
}

export default sub


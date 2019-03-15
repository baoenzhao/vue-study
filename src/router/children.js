import sub from './StudyRouter'

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
import DynamicStyle from '@/components/modules/children/DynamicStyle'
import KeyReuse from '@/components/modules/children/KeyReuse'
import ArrayUpdate from '@/components/modules/children/ArrayUpdate'
import ObjAddAttr from '@/components/modules/children/ObjAddAttr'
import EmitCom from '@/components/modules/children/EmitCom'
import VmodelCom from '@/components/modules/children/VmodelCom'
import SlotCom from '@/components/modules/children/SlotCom'
import IsDynamicCom from '@/components/modules/children/IsDynamicCom'
import IsInsideCom from '@/components/modules/children/IsInsideCom'
import Propvalidate from '@/components/modules/children/Propvalidate'
import InputListeners from '@/components/modules/children/InputListeners'
import SyncProp from '@/components/modules/children/SyncProp'
import SlotName from '@/components/modules/children/SlotName'
import SlotRange from '@/components/modules/children/SlotRange'
import ChildEntity from '@/components/modules/children/ChildEntity'
import DependsTo from '@/components/modules/children/DependsTo'
import SimpleTransition from '@/components/modules/children/SimpleTransition'
import SimpleAnimation from '@/components/modules/children/SimpleAnimation'
import TransitionMode from '@/components/modules/children/TransitionMode'
import TransitionList from '@/components/modules/children/TransitionList'
import GlobalMixin from '@/components/modules/children/GlobalMixin'
import GlobalCommand from '@/components/modules/children/GlobalCommand'
import FunctionComponent from '@/components/modules/children/FunctionComponent'
import GlobalFilters from '@/components/modules/children/GlobalFilters'
import VuexState from '@/components/modules/children/VuexState'
import VuexMapstate from '@/components/modules/children/VuexMapstate'
import VuexGetter from '@/components/modules/children/VuexGetter'
import VuexMapGetters from '@/components/modules/children/VuexMapGetters'
import VuexMutation from '@/components/modules/children/VuexMutation'
import VuexMapMutations from '@/components/modules/children/VuexMapMutations'
import VuexAction from '@/components/modules/children/VuexAction'
import VuexMapActions from '@/components/modules/children/VuexMapActions'
import VuexModules from '@/components/modules/children/VuexModules'
import VuexNamespaced from '@/components/modules/children/VuexNamespaced'
import SimpleRouter from '@/components/modules/children/SimpleRouter'
import DynamicRouter from '@/components/modules/children/DynamicRouter'
import ErrorRouter from '@/components/modules/children/ErrorRouter'
import RouterChildren from '@/components/modules/children/RouterChildren'
import RouterCode from '@/components/modules/children/RouterCode'
import RouterNameView from '@/components/modules/children/RouterNameView'
import RouterRedirect from '@/components/modules/children/RouterRedirect'
import RouterComponentProps from '@/components/modules/children/RouterComponentProps'
import RouterNav from '@/components/modules/children/RouterNav'
import RouterMeta from '@/components/modules/children/RouterMeta'
const RouterScrollBehavior = () => import('@/components/modules/children/RouterScrollBehavior')//使用此方法可以进行路由的懒加载
const AxiosReq = () => import('@/components/modules/children/AxiosReq')
const AxiosReqParams = () => import('@/components/modules/children/AxiosReqParams')

const array = [
    {
        path: "/evaluate",
        component: Evaluate
    },
    {
        path: "/vbind",
        // component: resolve => require(['@/components/modules/children/Vbind'], resolve)//懒加载
        component: Vbind
    },
    {
        path: "/vmodel",
        component: Vmodel
    },
    {
        path: "/vif",
        component: Vif
    },
    {
        path: "/vshow",
        component: Vshow
    },
    {
        path: "/vfor",
        component: Vfor
    },
    {
        path: "/von",
        component: Von
    },
    {
        path: "/simplecomponent",
        component: SimpleComponent
    },
    {
        path: "/lifemethod",
        component: LifeMethod
    },
    {
        path: "/vonce",
        component: Vonce
    },
    {
        path: "/vhtml",
        component: Vhtml
    },
    {
        path: "/dynamicparam",
        component: Dynamicparam
    },
    {
        path: "/modifier",
        component: Modifier
    },
    {
        path: "/computer",
        component: Computer
    },
    {
        path: "/watch",
        component: Watch
    },
    {
        path: "/dynamicclass",
        component: DynamicClass
    },
    {
        path: "/dynamicstyle",
        component: DynamicStyle
    },
    {
        path: "/keyreuse",
        component: KeyReuse
    },
    {
        path: "/arrayupdate",
        component: ArrayUpdate
    },
    {
        path: "/objaddattr",
        component: ObjAddAttr
    },
    {
        path: "/emitcom",
        component: EmitCom
    },
    {
        path: "/vmodelcom",
        component: VmodelCom
    },
    {
        path: "/slotcom",
        component: SlotCom
    },
    {
        path: "/isdynamiccom",
        component: IsDynamicCom
    },
    {
        path: "/isinsidecom",
        component: IsInsideCom
    },
    {
        path: "/propvalidate",
        component: Propvalidate
    },
    {
        path: "/inputlisteners",
        component: InputListeners
    },
    {
        path: "/syncprop",
        component: SyncProp
    },
    {
        path: "/slotname",
        component: SlotName
    },
    {
        path: "/slotrange",
        component: SlotRange
    },
    {
        path: "/childentity",
        component: ChildEntity
    },
    {
        path: "/dependsto",
        component: DependsTo
    },
    {
        path: "/simpletransition",
        component: SimpleTransition
    },
    {
        path: "/simpleanimation",
        component: SimpleAnimation
    },
    {
        path: "/transitionmode",
        component: TransitionMode
    },
    {
        path: "/transitionlist",
        component: TransitionList
    },
    {
        path: "/globalmixin",
        component: GlobalMixin
    },
    {
        path: "/globalcommand",
        component: GlobalCommand
    },
    {
        path: "/functioncomponent",
        component: FunctionComponent
    },
    {
        path: "/globalfilters",
        component: GlobalFilters
    },
    {
        path: "/vuexstate",
        component: VuexState
    },
    {
        path: "/vuexmapstate",
        component: VuexMapstate
    },
    {
        path: "/vuexgetter",
        component: VuexGetter
    },
    {
        path: "/vuexmapgetters",
        component: VuexMapGetters
    },
    {
        path: "/vuexmutation",
        component: VuexMutation
    },
    {
        path: "/vuexmapmutations",
        component: VuexMapMutations
    },
    {
        path: "/vuexaction",
        component: VuexAction
    },
    {
        path: "/vuexmapactions",
        component: VuexMapActions
    },
    {
        path: "/vuexmodules",
        component: VuexModules
    },
    {
        path: "/vuexnamespaced",
        component: VuexNamespaced
    },
    {
        path: "/simplerouter",
        redirect: "/componenta",//默认子路由页面
        component: SimpleRouter,
        children: sub.children1
    },
    {
        path: "/dynamicrouter",
        redirect: "/componentb/名称",//默认子路由页面
        component: DynamicRouter,
        children: sub.children2
    },
    {
        path: "/errorrouter",
        component: ErrorRouter,
    },
    {
        path: "/routerchildren",
        component: RouterChildren
    },
    {
        path: "/routercode",
        component: RouterCode,
        redirect: "/componentc/默认页面",//默认子路由页面
        children: sub.children3
    },
    {
        path: "/routernameview",
        component: RouterNameView,
        redirect: { name: 'ComponentE' },//默认子路由页面
        children: sub.children4
    },
    {
        path: "/routerredirect",
        component: RouterRedirect,
        alias: "/othername"
    },
    {
        path: "/routercomponentprops",
        component: RouterComponentProps,
        children: sub.children5
    },
    {
        path: "/routernav",
        component: RouterNav,
        beforeEnter: (to, from, next) => {
            console.log('路由进入之前');
            next();
        }
    },
    {
        path: "/routermeta",
        component: RouterMeta,
        meta: { isLogin: true }
    },
    {
        path: "/routerscrollbehavior",
        component: RouterScrollBehavior
    },
    {
        path: "/axiosreq",
        component: AxiosReq
    },
    {
        path: "/axiosreqparams",
        component: AxiosReqParams
    }
];

export default array;
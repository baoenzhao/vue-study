import Vue from 'vue';
import Vuex from 'vuex';
import { FUNCTION } from '../data/const'
import ModuleA from './ModuleA'
import ModuleB from './ModuleB'

Vue.use(Vuex);

const state = {
    nickname: "ozzy",
    age: 29,
    sex: "男",
    say: "我是一名程序员"
}
const getters = {
    hello: state => (end) => {
        end = end == undefined ? "" : end; 
        return "Hello! " + state.say + end;
    }
}
const mutations = {//相当于setter方法，但是为同步改变
    changeNickname: function (state, nickname) {
        state.nickname = nickname;
    },
    changeSay: function (state, content) {
        state.say = content;
    },
    [FUNCTION.CHANGE_SAY]: function (state, content) {
        state.say = content;
    },
    changeAge: function (state, age) {
        state.age = age;
    }
}
const actions = {
    changeNickname: function (context, nickname) {
        context.commit('changeNickname', nickname);
    },
    changeAge ({ commit }, age) {
        commit('changeAge', age);
    }
}

const store = new Vuex.Store({
    modules: {
        moduleA: ModuleA,
        moduleB: ModuleB
    },
    state,
    getters,
    mutations,
    actions,
    // strict: process.env.NODE_ENV !== 'production'//严格模式，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
})

export default store;
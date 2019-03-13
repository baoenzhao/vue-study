const state = {
    graph: {
        width: 4,
        type: "正方形"
    }
}
const getters = {
    getSize: function (state) {
        return state.graph.width * state.graph.width;
    } 
} 
const mutations = {
    changeWidth: function (state, width) {
        state.graph.width = width;
    }
} 
const actions = {
    changeWidth: ({ commit }, width) => {
        commit('changeWidth', width);
    }
}

const moduleB = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default moduleB
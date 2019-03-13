const state = {
    graph: {
        length: 25,
        width: 2,
        type: "长方形"
    }
}
const getters = {
    getSize: function (state) {
        return state.graph.length * state.graph.width;
    } 
} 
const mutations = {
    changeLength: function (state, length) {
        state.graph.length = length;
    },
    changeWidth: function (state, width) {
        state.graph.width = width;
    }
} 
const actions = {
    changeWidth: ({ commit }, width) => {
        commit('changeWidth', width);
    }
}

const moduleA = {
    state,
    getters,
    mutations,
    actions
}

export default moduleA
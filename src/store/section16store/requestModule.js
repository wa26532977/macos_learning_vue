export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    getters: {
        getRequests(state, getters, rootState, rootGetters) {
            return state.requests.filter(request => request.coachId === rootGetters.getUserId)
        },
        getHasRequests(state, getters) {
          return getters.getRequests.length > 0
        }
    },
    mutations: {
        addRequest(state, payload) {
            console.log(payload)
            state.requests.push(payload)
        }
    },
    actions: {
        addRequest(context, payload) {
            const newRequest = {
                id: new Date().toISOString(),
                coachId: payload.coachId,
                userEmail: payload.email,
                message: payload.message
            }
            context.commit('addRequest', newRequest)
        }
    }
}
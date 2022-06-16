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
        },
        loadRequest(state, payload) {
            state.requests = payload
        }
    },
    actions: {
        async addRequest(context, payload) {
            const newRequest = {
                userEmail: payload.email,
                message: payload.message
            }
            const response = await fetch(`https://coachapp-ab765-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest)
            })
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message || "Failed to send request")
            }

            newRequest.id = responseData.name
            newRequest.coachId = payload.coachId

            context.commit('addRequest', newRequest)
        },
        async fetchRequests(context) {
            const response = await fetch(`https://coachapp-ab765-default-rtdb.firebaseio.com/requests/${context.rootGetters.getUserId}.json?auth=${context.rootGetters.getToken}`)
            const responseData = await response.json()
            if (!response.ok) {
                throw new Error(responseData.message || "Fail to load requests")
            }
            const requests = []
            Object.keys(responseData).forEach((key) => {
                // console.log(responseData[key], key)
                const request = {
                    id: key,
                    ...responseData[key],
                    coachId: context.rootGetters.getUserId,
                }
                requests.push(request)
            })
            // console.log(requests)
            context.commit('loadRequest', requests)
        }
    }
}
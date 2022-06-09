const counterModule = {
    namespaced: true,
    state: {
        counter: 0,
    },
    getters: {
        getCounter(state) {
          return state.counter
        },
        finalCounter(state) {
            return state.counter * 2
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        }
    },
    mutations: {
        addOne(state) {
            state.counter++
        },
        increaseCounter(state, payload) {
            console.log("from increaseCounter")
            console.log(state)
            state.counter += payload.value + payload.value_2
        },
    },
    actions: {
        gettingUser(context, payload) {
            setTimeout(() => {
                context.commit('increaseCounter', payload)
            }, 2000)
        },
    }


}


export default counterModule
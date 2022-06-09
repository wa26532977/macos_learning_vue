import {createStore} from 'vuex'
import counterModule from "@/store/modules/counterModule";

export default createStore({
    state: {
        userLogin: false
    },
    getters: {
        userAuthentication(state) {
            return state.userLogin
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.userLogin = payload.logState
        },

    },
    actions: {
        logIn(context) {
            context.commit('setAuth', {logState: true})
        },
        logOut(context) {
            context.commit('setAuth', {logState: false})
        }

    },
    modules: {
        counterModule
    }
})

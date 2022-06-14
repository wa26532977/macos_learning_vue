import {createStore} from "vuex";
import requestModule from "@/store/section16store/requestModule";

export default createStore({
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ],
            userId: 'c3',
        }
    },
    getters: {
        getCoaches(state) {
            return state.coaches
        },
        getHasCoaches(state) {
            return state.coaches.length > 0
        },
        getUserId(state) {
            return state.userId
        },
        // getIsCoach(state, getters, rootState, rootgetter) {
        //     const coaches = getters.getCoaches
        // }
        getIsCoach(state, getters) {
            const coaches = getters.getCoaches
            const userId = getters.getUserId
            return coaches.some(coach => coach.id === userId)
        }
    },
    mutations: {
        registerCoach(state, payload) {
            state.coaches.push(payload)
        }
    },
    actions: {
        registerCoach(context, data) {
            const coachData = {
                // id: new Date().toISOString(),
                id: context.rootGetters.getUserId,
                firstName: data.first,
                lastName: data.last,
                areas: data.areas,
                description: data.desc,
                hourlyRate: data.rate
            }
            context.commit('registerCoach', coachData)

        }
    },
    modules: {request: requestModule}
})
import {createStore} from "vuex";
import requestModule from "@/store/section16store/requestModule";
import {fireBaseApiKey} from "@/keys/keys";

export default createStore({
    state() {
        return {
            lastFetch: null,
            coaches: [],
            userId: null,
            token: null,
            tokenExpiration: null
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
        },
        shouldUpdate(state) {
            if (!state.lastFetch) {
                return true
            }
            // check if the time is longer then 60 seconds
            return (new Date().getTime() - state.lastFetch) / 1000 > 60
        }
    },
    mutations: {
        registerCoach(state, payload) {
            state.coaches.push(payload)
        },
        setCoaches(state, payload) {
            state.coaches = payload
        },
        setFetchTimestamp(state) {
            state.lastFetch = new Date().getTime()
        },
        setUser(state, payload) {
            state.token = payload.token
            state.userId = payload.userId
            state.tokenExpiration = payload.tokenExpiration
        }
    },
    actions: {
        // login(context) {
        //
        // },
        async signup(context, payload) {
            const response = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseApiKey}`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: payload.email,
                        password: payload.password,
                        returnSecureToken: true
                    })
                }
            )
            // console.log(payload.email, payload.password)
            const responseData = await response.json()
            console.log(responseData)
            // console.log(responseData.error.message)
            // if (responseData.error.message === "EMAIL_EXISTS") {
            //     throw new Error(responseData.error.message)
            // }
            if (!response.ok) {
                throw new Error(responseData.error.message || "Something went wrong when try to signup")
            }
            // console.log(responseData)
            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
                tokenExpiration: responseData.expiresIn
            })

        },
        async registerCoach(context, data) {
            const userId = context.rootGetters.getUserId
            const coachData = {
                // id: new Date().toISOString(),
                firstName: data.first,
                lastName: data.last,
                areas: data.areas,
                description: data.desc,
                hourlyRate: data.rate
            }
            const response = await fetch(`https://coachapp-ab765-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
                // put will try update or non exist create, where post will create a new data entry
                method: 'PUT',
                body: JSON.stringify(coachData)
            })
            console.log('response', response)
            const responseData = await response.json()
            console.log('responseData', responseData)
            if (!response.ok) {
                console.log('error')
            }
            context.commit('registerCoach', {...coachData, id: userId})
        },
        async loadCoaches(context, payload) {
            // if should update is false, the code will end at first return
            if (!context.getters.shouldUpdate && !payload.refresh) {
                return
            }
            console.log("not forced")
            const response = await fetch(`https://coachapp-ab765-default-rtdb.firebaseio.com/coaches.json`)
            const responseData = await response.json()
            if (!response.ok) {
                console.log('error handling')
                throw new Error(responseData.message || "Fail to fetch!")
            }
            console.log(responseData)
            const coaches = []
            for (const key in responseData) {
                const coach = {
                    id: key,
                    firstName: responseData[key].firstName,
                    lastName: responseData[key].lastName,
                    areas: responseData[key].areas,
                    description: responseData[key].description,
                    hourlyRate: responseData[key].hourlyRate
                }
                coaches.push(coach)
            }
            context.commit('setCoaches', coaches)
            context.commit('setFetchTimestamp')
        }
    },
    modules: {request: requestModule}
})
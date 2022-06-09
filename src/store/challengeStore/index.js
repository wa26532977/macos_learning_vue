import {createStore} from "vuex";

export default createStore({
    state: {
        isLoggedIn: false,
        products: [
            {
                id: 'p1',
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                title: 'Book Collection',
                description:
                    'A collection of must-read books. All-time classics included!',
                price: 99.99,
            },
            {
                id: 'p2',
                image:
                    'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
                title: 'Mountain Tent',
                description: 'A tent for the ambitious outdoor tourist.',
                price: 129.99,
            },
            {
                id: 'p3',
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                title: 'Food Box',
                description:
                    'May be partially expired when it arrives but at least it is cheap!',
                price: 6.99,
            },
        ],
        cart: {items: [], total: 0, qty: 0},
    },
    getters: {
        getIsLoggedIn(state) {
            return state.isLoggedIn
        },
        getProducts(state) {
            return state.products
        },
        getCart(state) {
            return state.cart
        }

    },
    mutations: {
        addProductFromCart(state, payload) {
            // console.log(payload.id)
            const productInCartIndex = this.state.cart.items.findIndex(
                (ci) => ci.productId === payload.id)

            if (productInCartIndex >= 0) {
                this.state.cart.items[productInCartIndex].qty += 1
            } else {
                const newItem = {
                    productId: payload.id,
                    title: payload.title,
                    image: payload.image,
                    price: payload.price,
                    qty: 1,
                }
                console.log(newItem)
                this.state.cart.items.push(newItem)
            }
            this.state.cart.qty += 1
            this.state.cart.total += payload.price
        },
        removeProductFromCart(state, payload) {
            // console.log(payload.prodId)
            const productInCartIndex = this.state.cart.items.findIndex(
                (cartItem) => cartItem.productId === payload.prodId
            )
            const prodData = this.state.cart.items[productInCartIndex]
            console.log(prodData)
            this.state.cart.items.splice(productInCartIndex, 1)
            this.state.cart.qty -= prodData.qty
            this.state.cart.total -= prodData.price * prodData.qty
        },
        setAuth(state, payload) {
            this.state.isLoggedIn = payload.logState
        }

    },
    actions: {
        logIn(context) {
            context.commit('setAuth', {logState: true})
        },
        logOut(context) {
            context.commit('setAuth', {logState: false})
        },
        addToCart(context, payload) {
            context.commit('addProductFromCart', payload)
        },
        removeToCart(context, payload) {
            context.commit('removeProductFromCart', payload)
        }

    },
    modules: {}
})
import { createStore, combineReducers } from 'redux'

// initial state
const initialState = {
	cart: [
		{
			product: 'bread 700g',
			quantity: 2,
			unitCost: 90
		},
		{
			product: 'milk 500ml',
			quantity: 1,
			unitCost: 47
		},
	]
}

// Actions
const ADD_TO_CART = 'ADD_TO_CART'

// Reducers
const productsReducer = function(state = [], action) {
	return state
}

const cartReducer = function(state = initialState, action) {
	switch(action.type) {
		case ADD_TO_CART: {
			return {
				...state, 
				cart: [...state.cart, action.payload]
			}
		}
		default: return state
	}
}

// Action functions
function addToCart(product, quantity, unitCost) {
	return {
		type: ADD_TO_CART,
		payload: { product, quantity, unitCost}
	}
}

const allReducers = {
	products: productsReducer,
	shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers)

let store = createStore(rootReducer)

console.log("initialState: ", store.getState())

let unsubscribe = store.subscribe(() => 
		console.log('un: ', store.getState())
	)

store.dispatch(addToCart('Coffee 250g', 1, 250))
store.dispatch(addToCart('Flour 1kg', 2, 110))
store.dispatch(addToCart('Juice 2L', 1, 250))

unsubscribe()
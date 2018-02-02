import { createStore, combineReducers } from 'redux'

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

const productsReducer = function(state = [], action) {
	return state
}

const cartReducer = function(state = initialState, action) {
	return state
}

const allReducers = {
	products: productsReducer,
	shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers)

let store = createStore(rootReducer)

console.log("initialState: ", store.getState())
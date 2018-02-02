import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store.js'
import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions'
import App from './components/App'

const cartData = store.getState().shoppingCart

ReactDOM.render(
	<Provider store={store}>
		<App  data={cartData} />
	</Provider>,
	document.getElementById('root')
)

console.log("initialState: ", store.getState())

let unsubscribe = store.subscribe(() => 
		console.log('un: ', store.getState())
	)

store.dispatch(addToCart('Coffee 250g', 1, 250))
store.dispatch(addToCart('Flour 1kg', 2, 110))
store.dispatch(addToCart('Juice 2L', 1, 250))

store.dispatch(updateCart('Flour 1kg', 5, 110))

unsubscribe()
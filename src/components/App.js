import React from 'react'
import store from '../store.js'

function App({
	data
}) {
	return (
		<div>
			<h1>Redux Shopping Cart</h1>
			<p>...add stuff ...delete stuff</p>
			{console.log('props: ', store.getState())}
			<div className="cart">
				{
					Object.keys(data.cart).map(item => <p key={item}>{data.cart[item].product}</p> )
				}
			</div>
		</div>
	)
}

export default App
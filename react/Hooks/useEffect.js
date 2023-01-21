import React, { useState, useEffect } from 'react';

const App = () => {
	const [number, setNumber] = useState(0);
	const [aNumber, setAnumber] = useState(0);

	const sayHello = () => console.log('Hello');
	useEffect(sayHello, []);
	return (
		<div className='App'>
			<button onClick={() => setNumber(number + 1)}>
				{number}
			</button>
			<button onClick={() => setAnumber(aNumber + 1)}>
				{aNumber}
			</button>
		</div>
	);
};

export default App;
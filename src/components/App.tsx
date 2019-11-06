import React from 'react';
import Todo from './Todo'

const App: React.FC = () => {
	const todos = ['Alice', 'Bob', 'Carol'];
	return (
		<Todo todos={todos} />
	);
}

export default App;

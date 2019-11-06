import React from 'react';

type Props = {
	todos: string[]
}

type State = {
	text: string;
}

class Todo extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			text: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e: React.FormEvent<HTMLInputElement>) {
		this.setState({ text: e.currentTarget.value });
	}

	handleClick() {
		console.log(this.state.text);
	}

	render() {
		return (
			<div>
				<h1>Todo</h1>
				<input type="text" value={this.state.text} onChange={this.handleChange} />
				<button onClick={this.handleClick}>Add todo</button>
				<ul>
					{this.props.todos.map((todo, i) => (
						<li key={i}>{todo}</li>
					))}
				</ul>
			</div>
		)
	}
}

export default Todo

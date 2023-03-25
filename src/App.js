import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import TodoHeader from "./components/todo-header/TodoHeader";
import TodoList from "./components/todo-list/TodoList";
import TodoFooter from "./components/todo-footer/TodoFooter";

import './App.css';

class App extends Component {
	state = {
		store: [],
		newText: "",
	}

	onChecked = (id) => {
		this.setState(({store}) => {
			const newArr = store.map(todo => {
				if (todo.id === id) {
					return {...todo, isCompleted: !todo.isCompleted}
				}

				return todo;
			});

			return {
				store: newArr
			}
		});
	}

	onInputChange = (newText) => {
		this.setState({
			newText: newText
		});
	}

	onDeleteTodo = (id) => {
		this.setState(({ store }) => {
			const filteredArray = store.filter(todo => todo.id !== id);
			return {
				store: filteredArray
			}
		});
	}

	addNewTodo = () => {
		this.setState(({store, newText}) => {
			if (newText.trim().length >= 3) {
				const newStore = {
					store: [
						...store,
						{
							text: newText,
							isCompleted: false,
							id: uuidv4()
						}
					]
				};
				return newStore;
			}
		});

		this.setState({
			newText: ""
		})
	}

	completedTodos = () => {
		return this.state.store.filter(todo => todo.isCompleted);
	}

	deleteAllCompletedTodos = () => {
		this.setState(({store}) => {
			return {
				store: store.filter(todo => !todo.isCompleted)
			}
		})
	}

	render() {
		const { store, newText } = this.state;
		return (
			<div className="todo-app">
				<TodoHeader
					newText={newText}
					onInputChange={this.onInputChange}
					addNewTodo={this.addNewTodo}
				/>
				<TodoList
					data={store}
					onChecked={this.onChecked}
					onDeleteTodo={this.onDeleteTodo}
				/>
				<TodoFooter
					length={store.length}
					completedTodos={this.completedTodos}
					deleteAllCompletedTodos={this.deleteAllCompletedTodos}
				/>
			</div>
		)
	}
}

export default App;
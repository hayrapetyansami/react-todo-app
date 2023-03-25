import TodoListItem from "../todo-list-item/TodoListItem";

import "./TodoList.css";

const TodoList = ({ data, onChecked, onDeleteTodo }) => {
	const todos = data.map(todo => {
		return <TodoListItem 
			todo={todo}
			key={todo.id}
			onChecked={onChecked}
			onDeleteTodo={onDeleteTodo}
		/>
	});

	return (
		<div className="todo-list">
			{todos}
		</div>
	);
};

export default TodoList;
import "./TodoListItem.css";

const TodoListItem = ({ todo, onChecked, onDeleteTodo }) => {

	const onCheckedFunction = () => {
		onChecked(todo.id);
	};

	const onDeletedFunction = () => {
		onDeleteTodo(todo.id);
	};

	return (
		<div className="todo-list-item">
			<label>
				<input
					type="checkbox"
					onChange={onCheckedFunction}
				/>
				<span>{todo.text}</span>
			</label>
			<button onClick={onDeletedFunction}>
				&times;
			</button>
		</div>
	);
};

export default TodoListItem;
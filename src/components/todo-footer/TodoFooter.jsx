import "./TodoFooter.css";

const TodoFooter = ({ length, completedTodos, deleteAllCompletedTodos }) => {
	return (
		<div className="todo-footer">
			<p>completed: {completedTodos().length} / {length}</p>
			<button onClick={deleteAllCompletedTodos}>
				Delete All Completed
			</button>
		</div>
	);
};

export default TodoFooter;
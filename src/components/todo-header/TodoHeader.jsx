import "./TodoHeader.css";

const TodoHeader = ({ onInputChange, newText, addNewTodo }) => {
	
	const onFormSubmit = (e) => {
		e.preventDefault();
		addNewTodo();
	}

	const onInputChangeFunction = (e) => {
		onInputChange(e.target.value);
	}

	return (
		<div className="todo-header">
			<h1>TODO Application</h1>
			<form onSubmit={onFormSubmit}>
				<input
					type="text"
					placeholder="Type here..."
					value={newText}
					onChange={onInputChangeFunction}
				/>
				<button>ADD</button>
			</form>
		</div>
	);
};

export default TodoHeader;
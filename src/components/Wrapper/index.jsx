import styles from "./index.module.scss";
import Overdue from "../Overdue";
import TodoViewContainer from "../TodoViewContainer";
// import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
const Wrapper = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
	return (
		<div className={styles.wrapper}>
			<Overdue />
			<TodoViewContainer
				todos={todos}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
				completeTodo={completeTodo}
			/>
		</div>
	);
};

export default Wrapper;

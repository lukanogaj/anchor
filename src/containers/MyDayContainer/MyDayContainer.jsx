import { useState } from "react";
import styles from "./MyDayContainer.module.scss";

import Content from "../../components/Content/Content";
import AddTodoModal from "../../components/AddTodoModal/AddTodoModal";
import MyDayPage from "../../pages/MyDay/MyDayPage";

import {
	useTodos,
	useOverdueTodos,
	useTodayTodos,
	useUpcomingTodos,
	useUndatedTodos,
} from "../../features/hooks";

const MyDayContainer = () => {
	const { todos, deleteTodo, updateTodo, completeTodo, addTodo } = useTodos();

	const overdueTodos = useOverdueTodos(todos);
	const todayTodos = useTodayTodos(todos);
	const upcomingTodos = useUpcomingTodos(todos);
	const undatedTodos = useUndatedTodos(todos);

	const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

	const openAddTask = () => setIsAddTaskOpen(true);
	const closeAddTask = () => setIsAddTaskOpen(false);

	const actions = {
		deleteTodo,
		updateTodo,
		completeTodo,
	};

	return (
		<div className={styles.myDayContainer}>
			<Content
				onOpenAddTask={openAddTask}
				headerLeftContent={<h1>My Day</h1>}>
				<MyDayPage
					overdueTodos={overdueTodos}
					todayTodos={todayTodos}
					upcomingTodos={upcomingTodos}
					undatedTodos={undatedTodos}
					actions={actions}
				/>

				{isAddTaskOpen && (
					<AddTodoModal
						addTodo={addTodo}
						onClose={closeAddTask}
					/>
				)}
			</Content>
		</div>
	);
};

export default MyDayContainer;

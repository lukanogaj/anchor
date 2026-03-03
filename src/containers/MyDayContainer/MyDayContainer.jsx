import { useState } from "react";
import Content from "../../components/Content/Content";
import styles from "./MyDayContainer.module.scss";

import MyDayPage from "../../pages/MyDay";

import useTodos from "../../features/hooks/useTodos";
import { useOverdueTodos } from "../../features/hooks/useOverdueTodos";
import { useTodayTodos } from "../../features/hooks/useTodayTodos";
import { useUpcomingTodos } from "../../features/hooks/useUpcomingTodos";
import { useUndatedTodos } from "../../features/hooks/useUndatedTodos";
import AddTodoModal from "../../components/AddTodoModal/AddTodoModal";
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
				onAddTaskClick={openAddTask}
				appHeaderLeft={<h1>My Day</h1>}>
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

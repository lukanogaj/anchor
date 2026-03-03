import styles from "./MyDayPage.module.scss";
import TodoRow from "../../components/TodoRow/TodoRow";

const Section = ({ title, emptyText, todos, actions, variant }) => {
	const isEmpty = !todos || todos.length === 0;

	return (
		<div
			className={`${styles.section} ${variant && styles[variant] ? styles[variant] : ""}`}>
			<div className={styles.sectionHeader}>
				<h2 className={styles.sectionTitle}>{title}</h2>
			</div>

			{isEmpty ? (
				<p className={styles.emptyText}>{emptyText}</p>
			) : (
				<div className={styles.todosList}>
					{todos.map((todo) => (
						<TodoRow
							key={todo.id}
							todo={todo}
							actions={actions}
						/>
					))}
				</div>
			)}
		</div>
	);
};

const MyDayPage = ({
	overdueTodos,
	todayTodos,
	actions,
	upcomingTodos,
	undatedTodos,
}) => {
	return (
		<section className={styles.myDayPage}>
			<div className={styles.myDayContent}>
				<Section
					title='Overdue'
					emptyText='No overdue tasks 🎉'
					todos={overdueTodos}
					actions={actions}
					variant='overdue'
				/>

				<Section
					title='Today'
					emptyText='No tasks for today'
					todos={todayTodos}
					actions={actions}
				/>
				<Section
					title='Upcoming'
					emptyText='No upcoming tasks'
					todos={upcomingTodos}
					actions={actions}
					variant='upcoming'
				/>

				<Section
					title='No Date'
					emptyText='No tasks without a date'
					todos={undatedTodos}
					actions={actions}
					variant='undated'
				/>
			</div>
		</section>
	);
};

export default MyDayPage;

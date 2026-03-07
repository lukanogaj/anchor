import styles from "./MyDayPage.module.scss";
import TodoRow from "../../components/TodoRow/TodoRow";

const Section = ({ title, emptyText, todos, actions, variant }) => {
	const isEmpty = !todos || todos.length === 0;

	const variantClass = variant && styles[variant] ? styles[variant] : "";

	return (
		<div className={`${styles.myDaySection} ${variantClass}`}>
			<div className={styles.myDaySectionHeader}>
				<h2 className={styles.myDaySectionTitle}>{title}</h2>
			</div>

			{isEmpty ? (
				<p className={styles.myDaySectionEmpty}>{emptyText}</p>
			) : (
				<div className={styles.myDaySectionList}>
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
	loading,
	overdueTodos,
	todayTodos,
	actions,
	upcomingTodos,
	undatedTodos,
}) => {
	if (loading) {
		return (
			<section className={styles.myDayPage}>
				<div className={styles.myDayPageContent}>
					<div className={styles.myDayLoadingState}>
						<p className={styles.myDayLoadingText}>Loading your tasks...</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className={styles.myDayPage}>
			<div className={styles.myDayPageContent}>
				<Section
					title='Overdue'
					emptyText='No overdue tasks 🎉'
					todos={overdueTodos}
					actions={actions}
					variant='myDaySectionOverdue'
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
					variant='myDaySectionUpcoming'
				/>

				<Section
					title='No Date'
					emptyText='No tasks without a date'
					todos={undatedTodos}
					actions={actions}
					variant='myDaySectionUndated'
				/>
			</div>
		</section>
	);
};

export default MyDayPage;

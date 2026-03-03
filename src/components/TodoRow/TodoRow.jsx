import styles from "./TodoRow.module.scss";
import { Dots, Dot, Star, Watch, ChevronDown } from "../images/icons/Icons";
import { useState } from "react";

const TodoRow = ({ todo, actions }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (!todo) {
		return <div className={styles.error}>NO TODO PASSED</div>;
	}

	const { completeTodo, updateTodo } = actions;

	const onComplete = () => completeTodo(todo.id);

	const onEdit = async () => {
		const nextTitleRaw = prompt("New title", todo.title);
		if (nextTitleRaw === null) return;

		const nextTitle = nextTitleRaw.trim();
		if (!nextTitle) return;

		const nextDate = prompt("New date (YYYY-MM-DD)", todo.due_on ?? "");
		if (nextDate === null) return;

		const updates = {
			title: nextTitle,
			due_on: nextDate,
		};

		const res = await updateTodo(todo.id, updates);
		if (!res?.ok) {
			alert(res?.error ?? "Failed to update todo");
		}
	};

	return (
		<div className={styles.todayCard}>
			<div className={styles.headerToday}>
				<div className={styles.leftBlock}>
					<input
						id={`todo-${todo.id}`}
						className={styles.check}
						type='checkbox'
						checked={!!todo.completed}
						onChange={onComplete}
						aria-label={`Mark ${todo.title} as complete`}
					/>

					<div className={styles.textBlock}>
						<label
							className={styles.title}
							htmlFor={`todo-${todo.id}`}>
							{todo.title}
						</label>

						<div className={styles.metaRow}>
							<span className={styles.dotWrap}>
								<Dot className={styles.dot} />
							</span>
							<span className={styles.dayCat}>{todo.listName ?? "Tasks"}</span>
						</div>
					</div>
				</div>

				<div className={styles.actions}>
					<div className={styles.topActions}>
						{/* CHEVRON */}
						<button
							type='button'
							className={styles.iconBtn}
							onClick={() => setIsExpanded((v) => !v)}
							aria-label={isExpanded ? "Collapse details" : "Expand details"}
							aria-expanded={isExpanded}>
							<ChevronDown
								className={`${styles.icon} ${
									isExpanded ? styles.chevronOpen : ""
								}`}
							/>
						</button>

						{/* THREE DOTS (still wired to edit for now) */}
						<button
							type='button'
							className={styles.iconBtn}
							onClick={onEdit}
							aria-label='More actions'>
							<Dots className={styles.icon} />
						</button>
					</div>

					{/* Keep for now (will remove later) */}
					<div className={styles.bottomActions}>
						<button
							type='button'
							className={styles.iconBtn}
							disabled
							aria-label='Star (coming soon)'>
							<Star className={styles.icon} />
						</button>

						<button
							type='button'
							className={styles.iconBtn}
							disabled
							aria-label='Schedule (coming soon)'>
							<Watch className={styles.icon} />
						</button>
					</div>
				</div>
			</div>

			{/* EXPANDED DETAILS */}
			{isExpanded && (
				<div className={styles.details}>
					{todo.description?.trim() ? (
						<p className={styles.description}>{todo.description}</p>
					) : (
						<p className={styles.descriptionEmpty}>No description</p>
					)}
				</div>
			)}
		</div>
	);
};

export default TodoRow;

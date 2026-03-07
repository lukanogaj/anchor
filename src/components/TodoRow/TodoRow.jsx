// import styles from "./TodoRow.module.scss";
// import { Dots, Dot, Star, Watch, ChevronDown } from "../images/icons/Icons";
// import { useEffect, useRef, useState } from "react";

// const COMPLETE_DELAY_MS = 500;

// const TodoRow = ({ todo, actions }) => {
// 	const [isExpanded, setIsExpanded] = useState(false);
// 	const [isCompleting, setIsCompleting] = useState(false);
// 	const completeTimerRef = useRef(null);

// 	useEffect(() => {
// 		return () => {
// 			if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
// 		};
// 	}, []);

// 	if (!todo) return null;

// 	const { completeTodo, updateTodo } = actions;

// 	const isDoneVisual = isCompleting || !!todo.completed;

// 	const onComplete = () => {
// 		if (isCompleting || todo.completed) return;

// 		setIsCompleting(true);

// 		completeTimerRef.current = setTimeout(async () => {
// 			try {
// 				const res = await completeTodo(todo.id);
// 				if (res && typeof res === "object" && "ok" in res && !res.ok) {
// 					setIsCompleting(false);
// 					alert(res.error ?? "Failed to complete todo");
// 				}
// 			} catch (e) {
// 				setIsCompleting(false);
// 				alert("Failed to complete todo");
// 			}
// 		}, COMPLETE_DELAY_MS);
// 	};

// 	const onEdit = async () => {
// 		if (isCompleting) return;

// 		const nextTitleRaw = prompt("New title", todo.title);
// 		if (nextTitleRaw === null) return;

// 		const nextTitle = nextTitleRaw.trim();
// 		if (!nextTitle) return;

// 		const nextDate = prompt("New date (YYYY-MM-DD)", todo.due_on ?? "");
// 		if (nextDate === null) return;

// 		const updates = {
// 			title: nextTitle,
// 			due_on: nextDate,
// 		};

// 		const res = await updateTodo(todo.id, updates);
// 		if (!res?.ok) {
// 			alert(res?.error ?? "Failed to update todo");
// 		}
// 	};

// 	return (
// 		<div
// 			className={`${styles.todoRow} ${isCompleting ? styles.todoRowCompleting : ""}`}>
// 			<div className={styles.todoRowHeader}>
// 				<div className={styles.todoRowLeft}>
// 					<input
// 						id={`todo-${todo.id}`}
// 						className={styles.todoRowCheckbox}
// 						type='checkbox'
// 						checked={isDoneVisual}
// 						onChange={onComplete}
// 						disabled={isCompleting}
// 						aria-label={`Mark ${todo.title} as complete`}
// 					/>

// 					<div className={styles.todoRowText}>
// 						<label
// 							className={styles.todoRowTitle}
// 							htmlFor={`todo-${todo.id}`}>
// 							{todo.title}
// 						</label>

// 						<div className={styles.todoRowMeta}>
// 							<span className={styles.todoRowDotWrap}>
// 								<Dot className={styles.todoRowDot} />
// 							</span>
// 							<span className={styles.todoRowListName}>
// 								{todo.listName ?? "Tasks"}
// 							</span>
// 						</div>
// 					</div>
// 				</div>

// 				<div className={styles.todoRowActions}>
// 					<div className={styles.todoRowActionsTop}>
// 						<button
// 							type='button'
// 							className={styles.todoRowIconButton}
// 							onClick={() => setIsExpanded((v) => !v)}
// 							disabled={isCompleting}
// 							aria-label={isExpanded ? "Collapse details" : "Expand details"}
// 							aria-expanded={isExpanded}>
// 							<ChevronDown
// 								className={`${styles.todoRowIcon} ${
// 									isExpanded ? styles.todoRowChevronOpen : ""
// 								}`}
// 							/>
// 						</button>

// 						<button
// 							type='button'
// 							className={styles.todoRowIconButton}
// 							onClick={onEdit}
// 							disabled={isCompleting}
// 							aria-label='More actions'>
// 							<Dots className={styles.todoRowIcon} />
// 						</button>
// 					</div>

// 					<div className={styles.todoRowActionsBottom}>
// 						<button
// 							type='button'
// 							className={styles.todoRowIconButton}
// 							disabled
// 							aria-label='Star (coming soon)'>
// 							<Star className={styles.todoRowIcon} />
// 						</button>

// 						<button
// 							type='button'
// 							className={styles.todoRowIconButton}
// 							disabled
// 							aria-label='Schedule (coming soon)'>
// 							<Watch className={styles.todoRowIcon} />
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{isExpanded && (
// 				<div className={styles.todoRowDetails}>
// 					{todo.description?.trim() ? (
// 						<p className={styles.todoRowDescription}>{todo.description}</p>
// 					) : (
// 						<p className={styles.todoRowDescriptionEmpty}>No description</p>
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default TodoRow;
import styles from "./TodoRow.module.scss";
import { Dots, Dot, Star, Watch, ChevronDown } from "../images/icons/Icons";
import { useEffect, useRef, useState } from "react";

const COMPLETE_DELAY_MS = 500;

const TodoRow = ({ todo, actions }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isCompleting, setIsCompleting] = useState(false);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const [editTitle, setEditTitle] = useState(todo?.title ?? "");
	const [editDueOn, setEditDueOn] = useState(todo?.due_on ?? "");
	const [editError, setEditError] = useState("");

	const completeTimerRef = useRef(null);
	const menuRef = useRef(null);

	useEffect(() => {
		return () => {
			if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
		};
	}, []);

	useEffect(() => {
		setEditTitle(todo?.title ?? "");
		setEditDueOn(todo?.due_on ?? "");
	}, [todo?.title, todo?.due_on]);

	useEffect(() => {
		if (!isMenuOpen) return;

		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	if (!todo) return null;

	const { completeTodo, updateTodo, deleteTodo } = actions;
	const isDoneVisual = isCompleting || !!todo.completed;

	const closeMenu = () => setIsMenuOpen(false);

	const toggleExpand = () => {
		closeMenu();
		setIsExpanded((prev) => !prev);
	};

	const onComplete = () => {
		if (isCompleting || todo.completed) return;

		setIsCompleting(true);

		completeTimerRef.current = setTimeout(async () => {
			try {
				const res = await completeTodo(todo.id);

				if (res && typeof res === "object" && "ok" in res && !res.ok) {
					setIsCompleting(false);
					setEditError(res.error ?? "Failed to complete todo");
				}
			} catch {
				setIsCompleting(false);
				setEditError("Failed to complete todo");
			}
		}, COMPLETE_DELAY_MS);
	};

	const openEdit = () => {
		closeMenu();
		setEditTitle(todo.title ?? "");
		setEditDueOn(todo.due_on ?? "");
		setEditError("");
		setIsEditing(true);
	};

	const closeEdit = () => {
		setIsEditing(false);
		setEditError("");
	};

	const onSaveEdit = async (e) => {
		e.preventDefault();

		if (isCompleting) return;

		const nextTitle = editTitle.trim();
		if (!nextTitle) {
			setEditError("Title cannot be empty");
			return;
		}

		const updates = {
			title: nextTitle,
			due_on: editDueOn || null,
		};

		const res = await updateTodo(todo.id, updates);

		if (!res?.ok) {
			setEditError(res?.error ?? "Failed to update todo");
			return;
		}

		closeEdit();
	};

	const onDelete = async () => {
		closeMenu();

		if (isCompleting) return;

		const res = await deleteTodo(todo.id);
		if (!res?.ok) {
			setEditError(res?.error ?? "Failed to delete todo");
		}
	};

	return (
		<div
			className={`${styles.todoRow} ${
				isCompleting ? styles.todoRowCompleting : ""
			} ${isMenuOpen ? styles.todoRowMenuOpen : ""}`}>
			<div className={styles.todoRowHeader}>
				<div className={styles.todoRowLeft}>
					<input
						id={`todo-${todo.id}`}
						className={styles.todoRowCheckbox}
						type='checkbox'
						checked={isDoneVisual}
						onChange={onComplete}
						disabled={isCompleting}
						aria-label={`Mark ${todo.title} as complete`}
					/>

					<div className={styles.todoRowText}>
						<label
							className={styles.todoRowTitle}
							htmlFor={`todo-${todo.id}`}>
							{todo.title}
						</label>

						<div className={styles.todoRowMeta}>
							<span className={styles.todoRowDotWrap}>
								<Dot className={styles.todoRowDot} />
							</span>
							<span className={styles.todoRowListName}>
								{todo.listName ?? "Tasks"}
							</span>
						</div>
					</div>
				</div>

				<div className={styles.todoRowActions}>
					<div className={styles.todoRowActionsTop}>
						<button
							type='button'
							className={styles.todoRowIconButton}
							onClick={toggleExpand}
							disabled={isCompleting}
							aria-label={isExpanded ? "Collapse details" : "Expand details"}
							aria-expanded={isExpanded}>
							<ChevronDown
								className={`${styles.todoRowIcon} ${
									isExpanded ? styles.todoRowChevronOpen : ""
								}`}
							/>
						</button>

						<div
							className={styles.todoRowMenuWrap}
							ref={menuRef}>
							<button
								type='button'
								className={styles.todoRowIconButton}
								onClick={() => setIsMenuOpen((prev) => !prev)}
								disabled={isCompleting}
								aria-label='More actions'
								aria-expanded={isMenuOpen}>
								<Dots className={styles.todoRowIcon} />
							</button>

							{isMenuOpen && (
								<div className={styles.todoRowMenu}>
									<button
										type='button'
										className={styles.todoRowMenuItem}
										onClick={openEdit}>
										Edit
									</button>

									<button
										type='button'
										className={`${styles.todoRowMenuItem} ${styles.todoRowMenuItemDanger}`}
										onClick={onDelete}>
										Delete
									</button>
								</div>
							)}
						</div>
					</div>

					<div className={styles.todoRowActionsBottom}>
						<button
							type='button'
							className={styles.todoRowIconButton}
							disabled
							aria-label='Star (coming soon)'>
							<Star className={styles.todoRowIcon} />
						</button>

						<button
							type='button'
							className={styles.todoRowIconButton}
							disabled
							aria-label='Schedule (coming soon)'>
							<Watch className={styles.todoRowIcon} />
						</button>
					</div>
				</div>
			</div>

			{isExpanded && (
				<div className={styles.todoRowDetails}>
					{todo.description?.trim() ? (
						<p className={styles.todoRowDescription}>{todo.description}</p>
					) : (
						<p className={styles.todoRowDescriptionEmpty}>No description</p>
					)}
				</div>
			)}

			{isEditing && (
				<div className={styles.todoRowEditDialog}>
					<form
						className={styles.todoRowEditForm}
						onSubmit={onSaveEdit}>
						<div className={styles.todoRowEditField}>
							<label
								htmlFor={`edit-title-${todo.id}`}
								className={styles.todoRowEditLabel}>
								Title
							</label>
							<input
								id={`edit-title-${todo.id}`}
								className={styles.todoRowEditInput}
								type='text'
								value={editTitle}
								onChange={(e) => setEditTitle(e.target.value)}
							/>
						</div>

						<div className={styles.todoRowEditField}>
							<label
								htmlFor={`edit-due-on-${todo.id}`}
								className={styles.todoRowEditLabel}>
								Due date
							</label>
							<input
								id={`edit-due-on-${todo.id}`}
								className={styles.todoRowEditInput}
								type='date'
								value={editDueOn ?? ""}
								onChange={(e) => setEditDueOn(e.target.value)}
							/>
						</div>

						{editError ? (
							<p className={styles.todoRowEditError}>{editError}</p>
						) : null}

						<div className={styles.todoRowEditActions}>
							<button
								type='button'
								className={styles.todoRowSecondaryButton}
								onClick={closeEdit}>
								Cancel
							</button>

							<button
								type='submit'
								className={styles.todoRowPrimaryButton}>
								Save
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default TodoRow;

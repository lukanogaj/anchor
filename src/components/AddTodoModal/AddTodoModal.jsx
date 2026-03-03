import styles from "./AddTodoModal.module.scss";
import { useState, useEffect } from "react";
import { Plus } from "../images/icons";

const AddTodoModal = ({ onClose, addTodo }) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [formVisible, setFormVisible] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const formatYYYYMMDD = (d) => {
		const y = d.getFullYear();
		const m = String(d.getMonth() + 1).padStart(2, "0");
		const day = String(d.getDate()).padStart(2, "0");
		return `${y}-${m}-${day}`;
	};

	const today = new Date();
	const minDate = formatYYYYMMDD(
		new Date(today.getFullYear() - 5, today.getMonth(), today.getDate()),
	);
	const maxDate = formatYYYYMMDD(
		new Date(today.getFullYear() + 5, today.getMonth(), today.getDate()),
	);
	//////
	const handleAddSubmit = async () => {
		const cleanTitle = title.trim();
		if (!cleanTitle) return;

		const dueOn = date ? date : null;
		const res = await addTodo(cleanTitle, description, dueOn);

		// If validation or insert failed, show message and keep form open
		if (!res?.ok) {
			setErrorMessage(res?.error ?? "Failed to add todo");
			return;
		}
		// Clear error first (tidy)
		setErrorMessage("");

		// Reset local state and show success message
		setTitle("");
		setDate("");
		setDescription("");
		setFormVisible(false);
		setShowSuccess(true);
	};

	// Auto-hide success message AND close form after 2s
	useEffect(() => {
		if (!showSuccess) return;

		const timer = setTimeout(() => {
			setShowSuccess(false);
			if (onClose) onClose();
		}, 2000);

		return () => clearTimeout(timer);
	}, [showSuccess, onClose]);

	return (
		<div>
			{formVisible && (
				<div className={styles.newTodo}>
					<div className={styles.newTodoForm}>
						<h1>Todo-List</h1>
						<input
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
								setErrorMessage("");
							}}
							placeholder='Add New Todo'
						/>
						<textarea
							rows='4'
							value={description}
							onChange={(e) => {
								setDescription(e.target.value);
								setErrorMessage("");
							}}
							placeholder='Description'
						/>
						<input
							type='date'
							value={date}
							min={minDate}
							max={maxDate}
							onChange={(e) => {
								setDate(e.target.value);
								setErrorMessage("");
							}}
						/>
						{errorMessage && <div className={styles.error}>{errorMessage}</div>}
						<button
							className={styles.btnAddTask}
							onClick={handleAddSubmit}>
							<Plus />
							<span>Add Todo</span>
						</button>
					</div>
				</div>
			)}

			{showSuccess && (
				<div className={styles.success}>Todo added successfully!</div>
			)}
		</div>
	);
};

export default AddTodoModal;

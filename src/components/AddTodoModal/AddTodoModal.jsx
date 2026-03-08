import styles from "./AddTodoModal.module.scss";
import { useState, useEffect, useRef } from "react";
import { Plus } from "../images/icons/Icons";

const formatYYYYMMDD = (d) => {
	const y = d.getFullYear();
	const m = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
};

const AddTodoModal = ({ onClose, addTodo }) => {
	const today = formatYYYYMMDD(new Date());

	const [title, setTitle] = useState("");
	const [date, setDate] = useState(today);
	const [description, setDescription] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [formVisible, setFormVisible] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const titleInputRef = useRef(null);

	const handleAddSubmit = async (e) => {
		e.preventDefault();

		const cleanTitle = title.trim();
		if (!cleanTitle) return;

		const dueOn = date || null;
		const res = await addTodo(cleanTitle, description, dueOn);

		if (!res?.ok) {
			setErrorMessage(res?.error ?? "Failed to add todo");
			return;
		}

		setErrorMessage("");
		setTitle("");
		setDate(today);
		setDescription("");
		setFormVisible(false);
		setShowSuccess(true);
	};

	useEffect(() => {
		titleInputRef.current?.focus();
	}, []);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				onClose?.();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onClose]);

	useEffect(() => {
		if (!showSuccess) return;

		const timer = setTimeout(() => {
			setShowSuccess(false);
			onClose?.();
		}, 2000);

		return () => clearTimeout(timer);
	}, [showSuccess, onClose]);

	return (
		<div>
			{formVisible && (
				<div
					className={styles.addTodoModal}
					onClick={onClose}>
					<div
						className={styles.addTodoModalPanel}
						onClick={(e) => e.stopPropagation()}>
						<div className={styles.addTodoModalHeader}>
							<h1>Add Todo</h1>

							<button
								type='button'
								className={styles.addTodoModalClose}
								onClick={onClose}
								aria-label='Close modal'>
								×
							</button>
						</div>

						<form
							className={styles.addTodoModalForm}
							onSubmit={handleAddSubmit}>
							<input
								ref={titleInputRef}
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
								min={today}
								onChange={(e) => {
									setDate(e.target.value);
									setErrorMessage("");
								}}
							/>

							{errorMessage && (
								<div className={styles.addTodoModalError}>{errorMessage}</div>
							)}

							<div className={styles.addTodoModalActions}>
								<button
									type='button'
									className={styles.addTodoModalCancel}
									onClick={onClose}>
									Cancel
								</button>

								<button
									type='submit'
									className={styles.addTodoModalSubmit}>
									<Plus />
									<span>Add Todo</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			{showSuccess && (
				<div className={styles.addTodoModalSuccess}>
					Todo added successfully!
				</div>
			)}
		</div>
	);
};

export default AddTodoModal;

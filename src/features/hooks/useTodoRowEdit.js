import { useState, useEffect, useRef } from "react";

export const useTodoRowEdit = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editTitle, setEditTitle] = useState(todo?.title ?? "");
	const [editDueOn, setEditDueOn] = useState(todo?.due_on ?? "");
	const [editError, setEditError] = useState("");

	const titleInputRef = useRef(null);

	useEffect(() => {
		if (isEditing && titleInputRef.current) {
			titleInputRef.current.focus();
		}
	}, [isEditing]);

	useEffect(() => {
		setEditTitle(todo?.title ?? "");
		setEditDueOn(todo?.due_on ?? "");
	}, [todo?.title, todo?.due_on]);

	const openEdit = () => {
		setEditTitle(todo.title ?? "");
		setEditDueOn(todo.due_on ?? "");
		setEditError("");

		setIsEditing(true);
	};

	const closeEdit = () => {
		setIsEditing(false);
		setEditError("");
	};
	return {
		todo,
		isEditing,
		editTitle,
		setEditTitle,
		editDueOn,
		setEditDueOn,
		editError,
		setEditError,
		titleInputRef,
		openEdit,
		closeEdit,
	};
};

import { useState, useRef, useEffect } from "react";

export const useTodoRowCompletion = ({ todo, completeTodo, setEditError }) => {
	const COMPLETE_DELAY_MS = 500;

	const [isCompleting, setIsCompleting] = useState(false);

	const completeTimerRef = useRef(null);

	useEffect(() => {
		return () => {
			if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
		};
	}, []);

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
	return { isCompleting, onComplete };
};

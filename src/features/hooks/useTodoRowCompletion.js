import { useState, useRef, useEffect } from "react";

export const useTodoRowCompletion = ({
	todoId,
	isCompleted,
	completeTodo,
	onError,
}) => {
	const COMPLETE_DELAY_MS = 500;

	const [isCompleting, setIsCompleting] = useState(false);

	const completeTimerRef = useRef(null);

	useEffect(() => {
		return () => {
			if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
		};
	}, []);

	const onComplete = () => {
		if (isCompleting || isCompleted) return;

		setIsCompleting(true);

		completeTimerRef.current = setTimeout(async () => {
			try {
				const res = await completeTodo(todoId);

				if (res && typeof res === "object" && "ok" in res && !res.ok) {
					setIsCompleting(false);
					onError(res.error ?? "Failed to complete todo");
				}
			} catch {
				setIsCompleting(false);
				onError("Failed to complete todo");
			}
		}, COMPLETE_DELAY_MS);
	};
	return { isCompleting, onComplete };
};

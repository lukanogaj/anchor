import { useMemo } from "react";
import { isFuture, startOfDay } from "../../lib/date"; // export startOfDay or make a helper

export const useUpcomingTodos = (todos = []) => {
	return useMemo(() => {
		return todos
			.filter((todo) => todo.due_on && !todo.completed && isFuture(todo.due_on))
			.sort(
				(a, b) =>
					startOfDay(a.due_on).getTime() - startOfDay(b.due_on).getTime(),
			);
	}, [todos]);
};

import { useMemo } from "react";
import { isUndated } from "../../lib/date";

export const useUndatedTodos = (todos = []) => {
	return useMemo(
		() =>
			todos
				.filter((todo) => isUndated(todo.due_on) && !todo.completed)
				.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
		[todos],
	);
};

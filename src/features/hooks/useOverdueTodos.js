import { useFilteredTodos } from "./useFilteredTodos";
import { isOverdue } from "../../lib/date";

export const useOverdueTodos = (todos = []) => {
	return useFilteredTodos(
		todos,
		(todo) => todo.due_on && !todo.completed && isOverdue(todo.due_on),
	);
};

import { useFilteredTodos } from "./useFilteredTodos";
import { isToday } from "../../lib/date";

export const useTodayTodos = (todos = []) => {
	return useFilteredTodos(
		todos,
		(todo) => todo.due_on && !todo.completed && isToday(todo.due_on),
	);
};

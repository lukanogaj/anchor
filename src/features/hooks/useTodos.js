import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";
import { isValidISODateString, isWithinFiveYears } from "../../lib/date";
import {
	fetchTodos as fetchTodosService,
	insertTodo,
	removeTodo,
	updateTodo as updateTodoService,
	markTodoComplete,
} from "../../services/todosServices";
import { faL } from "@fortawesome/free-solid-svg-icons";

const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchTodos = async (initial = false) => {
		if (initial) {
			setLoading(true);
		}

		try {
			const data = await fetchTodosService();
			setTodos(data);
		} catch (err) {
			console.error("Error fetching todos:", err);
		} finally {
			if (initial) {
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		fetchTodos(true);

		const channel = supabase
			.channel("public-todos-channel")
			.on(
				"postgres_changes",
				{ event: "*", schema: "public", table: "todos" },
				() => {
					fetchTodos();
				},
			)
			.subscribe();
		return () => supabase.removeChannel(channel);
	}, []);

	const addTodo = async (title, description, date) => {
		const cleanTitle = title?.trim();

		if (!cleanTitle) {
			return { ok: false, error: "Title is required" };
		}

		// Validate only if date exists
		if (date) {
			if (!isValidISODateString(date)) {
				return { ok: false, error: "Invalid date (use YYYY-MM-DD)" };
			}

			if (!isWithinFiveYears(date)) {
				return {
					ok: false,
					error: "Due date must be within 5 years of today",
				};
			}
		}

		try {
			await insertTodo({
				title: cleanTitle,
				description,
				due_on: date ?? null,
			});

			await fetchTodos();
			return { ok: true };
		} catch (error) {
			console.error("Error adding todo:", error);
			return { ok: false, error: "Failed to add todo" };
		}
	};

	const deleteTodo = async (id) => {
		try {
			await removeTodo(id);
			await fetchTodos();
		} catch (error) {
			console.error("Error deleting todo:", error);
		}
	};

	const updateTodo = async (id, updates) => {
		if (!updates || typeof updates !== "object") {
			return { ok: false, error: "Invalid updates payload" };
		}

		const nextUpdates = { ...updates };

		if ("due_on" in nextUpdates) {
			if (nextUpdates.due_on === "") {
				nextUpdates.due_on = null; // clear date
			} else if (nextUpdates.due_on != null) {
				if (!isValidISODateString(nextUpdates.due_on)) {
					return { ok: false, error: "Invalid date (use YYYY-MM-DD)" };
				}
				if (!isWithinFiveYears(nextUpdates.due_on)) {
					return {
						ok: false,
						error: "Due date must be within 5 years of today",
					};
				}
			}
		}

		try {
			await updateTodoService(id, nextUpdates);
			await fetchTodos();
			return { ok: true };
		} catch (error) {
			console.log("Error updating todo:", error);
			return { ok: false, error: "Failed to update todo" };
		}
	};
	const completeTodo = async (id) => {
		if (!id) {
			return { ok: false, error: "Invalid id" };
		}
		try {
			await markTodoComplete(id);
			await fetchTodos();
			return { ok: true };
		} catch (error) {
			return { ok: false, error: error.message || "Error completing todo:" };
		}
	};

	return { todos, loading, addTodo, deleteTodo, updateTodo, completeTodo };
};

export default useTodos;

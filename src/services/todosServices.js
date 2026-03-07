import supabase from "../lib/supabaseClient";

export const fetchTodos = async () => {
	const { data, error } = await supabase
		.from("todos")
		.select("*")
		.order("created_at", { ascending: true });

	if (error) throw error;
	return data ?? [];
};

export const insertTodo = async ({ title, description, due_on }) => {
	const { data, error } = await supabase
		.from("todos")
		.insert([{ title, description, due_on }])
		.select()
		.single();

	if (error) throw error;
	return data;
};

export const removeTodo = async (id) => {
	const { error } = await supabase.from("todos").delete().eq("id", id);
	if (error) throw error;
	return id;
};

export const updateTodo = async (id, updates) => {
	if (!updates || typeof updates !== "object") {
		throw new Error("updateTodo: updates must be an object");
	}

	const { data, error } = await supabase
		.from("todos")
		.update(updates)
		.eq("id", id)
		.select()
		.single();

	if (error) throw error;
	return data;
};

export const markTodoComplete = async (id) => {
	const { data, error } = await supabase
		.from("todos")
		.update({ completed: true })
		.eq("id", id)
		.select()
		.single();

	if (error) throw error;
	return data;
};

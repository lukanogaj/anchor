//“All comparisons are calendar-based (local start-of-day). Time-of-day is ignored.”

export const startOfDay = (date) => {
	const d = new Date(date);
	d.setHours(0, 0, 0, 0);
	return d;
};

export const isSameDay = (a, b) => {
	const d1 = startOfDay(a);
	const d2 = startOfDay(b);

	return d1.getTime() === d2.getTime();
};

export const isToday = (date) => {
	return isSameDay(date, new Date());
};

export const isOverdue = (date) => {
	if (!date) return false;

	const parsed = new Date(date);
	if (isNaN(parsed.getTime())) return false;
	const today = startOfDay(new Date());
	const due = startOfDay(parsed);
	return due < today;
};

export const isValidISODateString = (dateStr) => {
	if (typeof dateStr !== "string") return false;

	// Strict YYYY-MM-DD format
	const isoRegex = /^\d{4}-\d{2}-\d{2}$/;
	if (!isoRegex.test(dateStr)) return false;

	const [year, month, day] = dateStr.split("-").map(Number);
	const date = new Date(year, month - 1, day);

	// Ensure it's a real calendar date (reject 2026-02-31)
	return (
		date.getFullYear() === year &&
		date.getMonth() === month - 1 &&
		date.getDate() === day
	);
};

export const isWithinFiveYears = (dateStr) => {
	if (!isValidISODateString(dateStr)) return false;

	const today = startOfDay(new Date());

	const min = new Date(today);
	min.setFullYear(min.getFullYear() - 5);

	const max = new Date(today);
	max.setFullYear(max.getFullYear() + 5);

	const due = startOfDay(new Date(dateStr));

	return due >= min && due <= max;
};

// Future todos
export const isFuture = (date) => {
	if (!date) return false;

	const parsed = new Date(date);
	if (isNaN(parsed.getTime())) return false;

	const today = startOfDay(new Date());
	const due = startOfDay(parsed);

	return due > today;
};

export const isUndated = (due_on) => {
	return !due_on;
};

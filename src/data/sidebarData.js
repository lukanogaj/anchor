import {
	ChevronDown,
	ChevronUp,
	SidebarToggle,
	Plus,
	Search,
	Grid,
	Menu,
	NotesIcon,
	Hash,
	MenuFilter,
	LightbulbIcon,
} from "../components/images/icons/Icons";

export const SIDEBAR_HEADER_DATA = {
	profile: {
		name: "Lukasz",
		avatarAlt: "Mojo",
		chevron: {
			open: ChevronUp,
			closed: ChevronDown,
		},
	},
	actions: [
		{
			id: "toggle-sidebar",
			icon: SidebarToggle,
			ariaLabel: "Toggle sidebar",
		},
	],
};

export const SIDEBAR_ADD_TASK_DATA = {
	label: "Add Todo",
	ariaLabel: "Add todo",
	icon: Plus,
};

export const SIDEBAR_SEARCH_DATA = {
	placeholder: "Search",
	ariaLabel: "Search tasks",
	icon: Search,
};

export const WORKSPACE_DATA = {
	heading: "Workspace",
	items: [
		{ id: "all", label: "All", icon: Grid, count: 12, active: true },
		{ id: "tasks", label: "Tasks", icon: Menu, count: 8 },
		{ id: "notes", label: "Notes", icon: NotesIcon, count: 4 },
	],
};

export const PROJECTS_DATA = {
	heading: "Projects",
	items: [
		{
			id: "tech-upgrade",
			label: "Tech-Upgrade",
			icon: Hash,
			count: 4,
			accent: "blue",
		},
		{
			id: "new-design",
			label: "New Design",
			icon: Hash,
			count: 4,
			accent: "green",
		},
	],
};

export const SIDEBAR_FOOTER_DATA = {
	items: [
		{
			id: "new-list",
			label: "New List",
			icon: Plus,
			action: "newList",
			variant: "row",
		},
		{
			id: "sidebar-menu",
			icon: MenuFilter,
			action: "toggle",
			variant: "icon",
			ariaLabel: "Sidebar menu",
		},
	],
};

/* ==========================
MAIN_HEADER_DATA
============================= */

export const MAIN_HEADER_DATA = {
	actions: [
		{
			id: "filter",
			icon: MenuFilter,
			ariaLabel: "Filter tasks",
		},
		{
			id: "ideas",
			icon: LightbulbIcon,
			ariaLabel: "Ideas",
		},
	],
};

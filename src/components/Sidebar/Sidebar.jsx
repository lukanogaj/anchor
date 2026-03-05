import styles from "./Sidebar.module.scss";
import Header from "../Header/Header";
import AddTaskControl from "../Controls/AddTaskControl/AddTaskControl";
import SearchControl from "../Controls/InputSearch/InputSearch";
import Workspace from "../Workspace/Workspace";
import Projects from "../Projects/Projects";
import SideBarFooter from "../SidebarFooter/SidebarFooter";

const Sidebar = ({ onAddTaskClick = () => {} }) => {
	return (
		<aside className={styles.sideBar}>
			<Header />
			<AddTaskControl onOpen={onAddTaskClick} />
			<SearchControl />

			<div className={styles.main}>
				<Workspace />
				<Projects />
			</div>

			<div className={styles.footer}>
				<SideBarFooter />
			</div>
		</aside>
	);
};

export default Sidebar;

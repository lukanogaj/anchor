import styles from "./AddTaskControl.module.scss";
import { SIDEBAR_ADD_TASK_DATA } from "../../../data/sidebarData";

const AddTaskControl = ({ onOpen }) => {
	const { label, ariaLabel, icon: Icon } = SIDEBAR_ADD_TASK_DATA;

	return (
		<button
			type='button'
			className={styles.addTaskButton}
			onClick={onOpen}
			aria-label={ariaLabel}>
			<span
				className={styles.addTaskIconWrapper}
				aria-hidden='true'>
				<Icon className={styles.addTaskIcon} />
			</span>

			<span className={styles.addTaskLabel}>{label}</span>
		</button>
	);
};

export default AddTaskControl;

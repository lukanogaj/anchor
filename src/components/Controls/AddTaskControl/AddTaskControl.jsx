import styles from "./AddTaskControl.module.scss";
import { SIDEBAR_ADD_TASK_DATA } from "../../../data/sidebarData";

const AddTaskControl = ({ onOpen }) => {
	const { label, ariaLabel, icon: Icon } = SIDEBAR_ADD_TASK_DATA;

	return (
		<button
			type='button'
			className={styles.addTaskControl}
			onClick={onOpen}
			aria-label={ariaLabel}>
			<span
				className={styles.iconWrap}
				aria-hidden='true'>
				<Icon className={styles.icon} />
			</span>

			<span className={styles.label}>{label}</span>
		</button>
	);
};

export default AddTaskControl;

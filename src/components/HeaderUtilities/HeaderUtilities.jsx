import styles from "./HeaderUtilities.module.scss";
import { Plus, SlidersIcon, LightbulbIcon } from "../images/icons/Icons";

const HeaderUtilities = ({ onOpenAddTask }) => {
	return (
		<div
			className={styles.headerUtilities}
			aria-label='Header Utilities'>
			<button
				type='button'
				className={styles.headerUtilitiesAddButton}
				onClick={onOpenAddTask}
				aria-label='Add todo'>
				<Plus className={styles.headerUtilitiesIcon} />
				<span>Add Todo</span>
			</button>

			<button
				type='button'
				className={styles.headerUtilitiesButton}
				aria-label='Filters'>
				<SlidersIcon className={styles.headerUtilitiesIcon} />
			</button>

			<button
				type='button'
				className={styles.headerUtilitiesButton}
				aria-label='Suggestions'>
				<LightbulbIcon className={styles.headerUtilitiesIcon} />
			</button>
		</div>
	);
};

export default HeaderUtilities;

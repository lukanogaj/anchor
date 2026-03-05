import styles from "./HeaderUtilities.module.scss";
import { SlidersIcon, LightbulbIcon } from "../images/icons/Icons";
const HeaderUtilities = () => {
	return (
		<div
			className={styles.utilities}
			aria-label='Header Utilities'>
			<button
				type='button'
				className={styles.iconButton}
				aria-label='Filters'>
				<SlidersIcon className={styles.icon} />
			</button>
			<button
				type='button'
				className={styles.iconButton}
				aria-label='Suggestions'>
				<LightbulbIcon className={styles.icon} />
			</button>
		</div>
	);
};

export default HeaderUtilities;

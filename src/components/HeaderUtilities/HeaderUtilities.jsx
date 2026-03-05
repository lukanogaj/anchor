import styles from "./HeaderUtilities.module.scss";
import { SlidersIcon, LightbulbIcon } from "../images/icons/Icons";

const HeaderUtilities = () => {
	return (
		<div
			className={styles.headerUtilities}
			aria-label='Header Utilities'>
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

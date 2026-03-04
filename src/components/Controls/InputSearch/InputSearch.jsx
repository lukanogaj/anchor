import styles from "./InputSearch.module.scss";
import { SIDEBAR_SEARCH_DATA } from "../../../data/sidebarData";

const InputSearch = () => {
	const { placeholder, ariaLabel, icon: Icon } = SIDEBAR_SEARCH_DATA;

	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder={placeholder}
				aria-label={ariaLabel}
				name='search'
				autoComplete='off'
				className={styles.input}
			/>
			<Icon className={styles.searchIcon} />
		</div>
	);
};

export default InputSearch;

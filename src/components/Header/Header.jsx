// import { useState } from "react";
// import styles from "./Header.module.scss";
// import mojo from "../images/mojo.jpg";
// import { SIDEBAR_HEADER_DATA } from "../../data/sidebarData";

// const Header = ({ onToggleSidebar = () => {} }) => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const { profile, actions } = SIDEBAR_HEADER_DATA;
// 	const ChevronIcon = isOpen ? profile.chevron.open : profile.chevron.closed;

// 	const toggleProfile = () => setIsOpen((prev) => !prev);

// 	return (
// 		<div className={styles.header}>
// 			<div className={styles.left}>
// 				<button
// 					type='button'
// 					className={styles.profileBtn}
// 					onClick={toggleProfile}
// 					aria-expanded={isOpen}
// 					aria-label='Open profile menu'>
// 					<span className={styles.avatarWrap}>
// 						<img
// 							src={mojo}
// 							alt={profile.avatarAlt}
// 						/>
// 					</span>

// 					<span className={styles.name}>{profile.name}</span>

// 					<span className={styles.chevron}>
// 						<ChevronIcon />
// 					</span>
// 				</button>
// 			</div>

// 			<div className={styles.right}>
// 				{actions.map(({ id, icon: Icon, ariaLabel }) => (
// 					<button
// 						key={id}
// 						type='button'
// 						className={styles.collapseBtn}
// 						onClick={onToggleSidebar}
// 						aria-label={ariaLabel}>
// 						<Icon className={styles.icon} />
// 					</button>
// 				))}
// 			</div>
// 		</div>
// 	);
// };
// export default Header;
import { useState } from "react";
import styles from "./Header.module.scss";
import mojo from "../images/mojo.jpg";
import { SIDEBAR_HEADER_DATA } from "../../data/sidebarData";

const Header = ({ onToggleSidebar = () => {} }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { profile, actions } = SIDEBAR_HEADER_DATA;
	const ChevronIcon = isOpen ? profile.chevron.open : profile.chevron.closed;

	const toggleProfile = () => setIsOpen((prev) => !prev);

	return (
		<div className={styles.headerBar}>
			<div className={styles.headerLeft}>
				<button
					type='button'
					className={styles.headerProfileButton}
					onClick={toggleProfile}
					aria-expanded={isOpen}
					aria-label='Open profile menu'>
					<span className={styles.headerAvatar}>
						<img
							src={mojo}
							alt={profile.avatarAlt}
						/>
					</span>

					<span className={styles.headerName}>{profile.name}</span>

					<span className={styles.headerChevron}>
						<ChevronIcon />
					</span>
				</button>
			</div>

			<div className={styles.headerRight}>
				{actions.map(({ id, icon: Icon, ariaLabel }) => (
					<button
						key={id}
						type='button'
						className={styles.headerActionButton}
						onClick={onToggleSidebar}
						aria-label={ariaLabel}>
						<Icon className={styles.headerActionIcon} />
					</button>
				))}
			</div>
		</div>
	);
};

export default Header;

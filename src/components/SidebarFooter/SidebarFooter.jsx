import styles from "./SidebarFooter.module.scss";
import { SIDEBAR_FOOTER_DATA } from "../../data/sidebarData";
import SidebarRow from "../SidebarRow/SidebarRow";

const SidebarFooter = ({ onNewList, onToggle }) => {
	const actionsMap = {
		newList: onNewList,
		toggle: onToggle,
	};

	return (
		<div className={styles.footer}>
			{SIDEBAR_FOOTER_DATA.items.map((item) => {
				const onClick = actionsMap[item.action];
				if (!onClick) return null;
				if (item.variant === "row") {
					return (
						<SidebarRow
							key={item.id}
							icon={item.icon}
							label={item.label}
							onClick={onClick}
							className={styles.newListBtn}
						/>
					);
				}

				return (
					<button
						key={item.id}
						type='button'
						className={styles.rightBtn}
						onClick={onClick}
						aria-label={item.ariaLabel}>
						<item.icon className={styles.icon} />
					</button>
				);
			})}
		</div>
	);
};

export default SidebarFooter;

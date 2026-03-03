import styles from "./Workspace.module.scss";
import SidebarRow from "../SidebarRow";
import { WORKSPACE_DATA } from "../../data/sidebarData";

const Workspace = () => {
	const { heading, items } = WORKSPACE_DATA;

	return (
		<section className={styles.workSpace}>
			<h4 className={styles.heading}>{heading}</h4>

			<div className={styles.list}>
				{items.map(({ id, label, icon, count, active }) => (
					<SidebarRow
						key={id}
						icon={icon}
						label={label}
						count={count}
						active={active}
					/>
				))}
			</div>
		</section>
	);
};

export default Workspace;

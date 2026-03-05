import styles from "./Projects.module.scss";
import SidebarRow from "../SidebarRow/SidebarRow";
import { PROJECTS_DATA } from "../../data/sidebarData";

const Projects = () => {
	const { heading, items } = PROJECTS_DATA;

	return (
		<section className={styles.projectsSection}>
			<h4 className={styles.projectsHeading}>{heading}</h4>

			<div className={styles.projectsList}>
				{items.map(({ id, label, icon, count, accent }) => (
					<SidebarRow
						key={id}
						icon={icon}
						label={label}
						count={count}
						accent={accent}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;

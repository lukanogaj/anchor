import styles from "./Content.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import DateTimeClock from "../DateTimeClock/DateTimeClock";
import HeaderUtilities from "../HeaderUtilities/HeaderUtilities";

const Content = ({ children, onAddTaskClick, appHeaderLeft }) => {
	return (
		<div className={styles.content}>
			<Sidebar onAddTaskClick={onAddTaskClick} />

			<div className={styles.mainWrapper}>
				<div className={styles.inner}>
					<header className={styles.header}>
						<div className={styles.headerLeft}>{appHeaderLeft}</div>

						<div className={styles.headerRight}>
							<DateTimeClock />
						</div>
					</header>

					<main className={styles.main}>{children}</main>
				</div>

				<div className={styles.rightRail}>
					<HeaderUtilities />
				</div>
			</div>
		</div>
	);
};

export default Content;

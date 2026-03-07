import styles from "./Content.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import DateTimeClock from "../DateTimeClock/DateTimeClock";
import HeaderUtilities from "../HeaderUtilities/HeaderUtilities";

const Content = ({ children, onOpenAddTask, headerLeftContent }) => {
	return (
		<div className={styles.contentLayout}>
			<Sidebar onOpenAddTask={onOpenAddTask} />

			<div className={styles.contentMain}>
				<div className={styles.contentColumn}>
					<header className={styles.contentHeader}>
						<div className={styles.contentHeaderLeft}>{headerLeftContent}</div>

						<div className={styles.contentHeaderRight}>
							<DateTimeClock />
						</div>
					</header>

					<main className={styles.contentBody}>{children}</main>
				</div>

				<div className={styles.contentRightRail}>
					<HeaderUtilities />
				</div>
			</div>
		</div>
	);
};

export default Content;

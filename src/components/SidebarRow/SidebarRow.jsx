import styles from "./SidebarRow.module.scss";

const SidebarRow = ({
	icon: Icon,
	label,
	count,
	active = false,
	accent,
	onClick,
}) => {
	const className = [
		styles.sidebarRow,
		active && styles.sidebarRowActive,
		accent && styles[`sidebarRowAccent_${accent}`],
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			type='button'
			className={className}
			onClick={onClick}>
			<span className={styles.sidebarRowLeft}>
				<span className={styles.sidebarRowIcon}>
					<Icon />
				</span>
				<span className={styles.sidebarRowLabel}>{label}</span>
			</span>

			{typeof count === "number" && (
				<span className={styles.sidebarRowCount}>{count}</span>
			)}
		</button>
	);
};

export default SidebarRow;

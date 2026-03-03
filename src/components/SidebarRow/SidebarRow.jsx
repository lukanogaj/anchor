import styles from "./SidebarRow.module.scss";

const SidebarRow = ({
	icon: Icon,
	label,
	count,
	active = false,
	accent, // 👈 NEW (optional: "blue" | "green")
	onClick,
}) => {
	const className = [
		styles.row,
		active && styles.active,
		accent && styles[`accent_${accent}`],
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			type='button'
			className={className}
			onClick={onClick}>
			<span className={styles.left}>
				<span className={styles.icon}>
					<Icon />
				</span>
				<span className={styles.label}>{label}</span>
			</span>

			{typeof count === "number" && (
				<span className={styles.count}>{count}</span>
			)}
		</button>
	);
};

export default SidebarRow;

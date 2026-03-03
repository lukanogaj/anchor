import PropTypes from "prop-types";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
	return <div className={styles.layout}>{children}</div>;
};

Layout.propTypes = {
	children: PropTypes.element,
};
export default Layout;

import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onToggle, showAddTask }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAddTask ? "red" : "green"}
				text={showAddTask ? "Close" : "Add"}
				onClick={onToggle}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: "default Task Tracker",
};

Header.protoTypes = {
	title: PropTypes.string.isRequired,
};

const headingStyle = {
	color: "red",
	backgroundColor: "black",
};
export default Header;

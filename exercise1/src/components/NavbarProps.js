//import { chainPropTypes } from "@mui/utils";
import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

function NavbarProps(props) {

	return (
		<div>
			<h3> NAVBAR COMPONENT</h3>
			<h3>{props.title}</h3>
			<hr/>
		</div>
	)
}


// PropTypes
NavbarProps.prototype = {
	title : PropTypes.string.isRequired
}

// Default Props
NavbarProps.defaultProps = {
	title : "Default"
}


export default NavbarProps;

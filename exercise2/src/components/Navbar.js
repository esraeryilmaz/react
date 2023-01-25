import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
	return(
		<div>
			<Link to="/"> <img src="../img/icon.png" className="logo" alt=""/> </Link>
			<ul className="myNavbar">
				<li>
					<button type = "button" className="btn"> <Link to = "/"> Home </Link> </button>
				</li>

				<li>
					<button type = "button" className="btn"> <Link to = "/about"> About Us </Link> </button>
				</li>

				<li>
					<button type = "button" className="btn"> <Link to = "/signup"> Sign Up </Link> </button>
				</li>

				<li>
					<button type = "button" className="btn"> <Link to = "/login"> Log In </Link> </button>
				</li>
			</ul>
		</div>
	)
}


export default Navbar;

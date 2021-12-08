import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Bloglist</span>
			</Link>
			<div className="ml-auto d-inline-block">
				<Link to="/people">
					<span className="navbar-brand mb-0 h1">People</span>
				</Link>
				<Link to="/planets">
					<span className="navbar-brand mb-0 h1">Planets</span>
				</Link>
				<Link to="/vehicles">
					<span className="navbar-brand mb-0 h1">Vehicles</span>
				</Link>
				<Link to="/favorites">
					<span className="navbar-brand mb-0 h1">
						<i
							className="fas fa-star bg-light text-dark rounded p-2"
							style={{
								fontSize: "1.3rem",
								cursor: "pointer"
							}}
						/>
					</span>
				</Link>
			</div>
		</nav>
	);
};

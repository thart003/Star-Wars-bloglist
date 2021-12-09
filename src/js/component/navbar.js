import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../store/favorites";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem";

export const Navbar = () => {
	const favorites = useFavorites();
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Bloglist</span>
			</Link>
			<div className="ml-auto d-inline-block">
				<Link to="/people">
					<span className="navbar-brand mb-0 h1">Personas</span>
				</Link>
				<Link to="/planets">
					<span className="navbar-brand mb-0 h1">Mundos</span>
				</Link>
				<Link to="/vehicles">
					<span className="navbar-brand mb-0 h1">Coches</span>
				</Link>
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-bs-toggle="dropdown"
						aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							{favorites.favorites.people.map((favorite, i) => (
								<a href={"/person/" + favorite.uid} key={i}>
									{favorite.name}
								</a>
							))}
						</li>
						<li>
							{favorites.favorites.planets.map((favorite, i) => (
								<a href={"/BigRock/" + favorite.uid} key={i}>
									{favorite.name}
								</a>
							))}
						</li>
						<li>
							{favorites.favorites.vehicles.map((favorite, i) => (
								<a href={"/car/ " + favorite.uid} key={i}>
									{favorite.name}
								</a>
							))}
						</li>
						{favorites.favorites.vehicles.length === 0 &&
							favorites.favorites.planets.length === 0 &&
							favorites.favorites.people.length === 0 && <a>There are no favorites</a>}
					</ul>
				</div>
			</div>
		</nav>
	);
};

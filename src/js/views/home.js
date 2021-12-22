import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { People } from "./people";
import { Planets } from "./planets";
import { Vehicles } from "./Vehicles";

export const Home = () => (
	<div className="text-center mt-5 home">
		<Vehicles />
		<People />
		<Planets />
	</div>
);

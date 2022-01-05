import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { starWarsApiFetch } from "../views/people";
import useSWR from "swr";

import SandCrawler from "../../img/sandy.png";
import Landspeeder from "../../img/landspeeder.jpeg";
import SkyHopper from "../../img/skyhopper.png";
import TieFighter from "../../img/tie-fighter.jpeg";
import Snowspeeder from "../../img/SnoWspeeDer.jpeg";
import AtAt from "../../img/atat.jpeg";
import TieBomber from "../../img/TiEB.jpg";
import AtSt from "../../img/atst.jpg";
import CloudCar from "../../img/stormCloudCar.png";
import SailBarge from "../../img/SailBarge.jpeg";

export const Car = () => {
	const params = useParams();
	const { data } = useSWR("/api/vehicles/" + params.id, starWarsApiFetch);

	const images = {
		"4": SandCrawler,
		"7": Landspeeder,
		"6": SkyHopper,
		"8": TieFighter,
		"14": Snowspeeder,
		"18": AtAt,
		"16": TieBomber,
		"19": AtSt,
		"20": CloudCar,
		"24": SailBarge
	};

	return (
		<div className="jumbotron">
			<div className="card mb-3" style={{ maxWidth: 540 }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={
								data && data.result.properties.name === "Sand Crawler" ? (
									images[4]
								) : data && data.result.properties.name === "X-34 landspeeder" ? (
									images[7]
								) : data && data.result.properties.name === "T-16 skyhopper" ? (
									images[6]
								) : data && data.result.properties.name === "TIE/LN starfighter" ? (
									images[8]
								) : data && data.result.properties.name === "Snowspeeder" ? (
									images[14]
								) : data && data.result.properties.name === "AT-AT" ? (
									images[18]
								) : data && data.result.properties.name === "TIE bomber" ? (
									images[16]
								) : data && data.result.properties.name === "AT-ST" ? (
									images[19]
								) : data && data.result.properties.name === "Storm IV Twin-Pod cloud car" ? (
									images[20]
								) : data && data.result.properties.name === "Sail barge" ? (
									images[24]
								) : (
									<h1>No Image</h1>
								)
							}
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{data && data.result.properties.name}</h5>
							<p className="card-text">These are all Star Wars vehicles.</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Car.propTypes = {
	name: PropTypes.string,
	height: PropTypes.string,
	birth_year: PropTypes.string
};

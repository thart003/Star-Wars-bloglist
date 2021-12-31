import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { starWarsApiFetch } from "../views/people";
import useSWR from "swr";

export const Car = () => {
	const params = useParams();
	const { data } = useSWR("/api/vehicles/" + params.id, starWarsApiFetch);

	const images = {
		"1": "https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2016/04/14608132418959.jpg",
		"2":
			"https://static.wikia.nocookie.net/starwars/images/5/54/X34-landspeeder.jpg/revision/latest?cb=20080316031428",
		"3": "https://dnqe9n02rny0n.cloudfront.net/sets/images/11099/75081_alt_2_md.jpg",
		"4": "https://bbts1.azureedge.net/images/p/full/2021/01/0cbfc29f-020e-479d-98f4-18252af8a8fd.jpg",
		"5":
			"https://static.wikia.nocookie.net/starwars/images/4/44/T-47_Speeder_DICE.png/revision/latest?cb=20151106063152",
		"6": "https://www.denofgeek.com/wp-content/uploads/2016/05/atat-walkers.jpg?fit=620%2C349",
		"7": "https://static.wikia.nocookie.net/starwars/images/9/9b/TIE_Bomber.jpg/revision/latest?cb=20081012232104",
		"8":
			"https://static.wikia.nocookie.net/starwars/images/f/ff/ATST-SWBdice.png/revision/latest/top-crop/width/360/height/360?cb=20151110032640",
		"9": "https://m.media-amazon.com/images/I/71xhRX2PQ3L._AC_SX425_.jpg",
		"10": "https://static.wikia.nocookie.net/starwars/images/a/a5/Eclipsesb.jpg/revision/latest?cb=20060406082922"
	};

	return (
		<div className="jumbotron">
			<div className="card mb-3" style={{ maxWidth: 540 }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={
								data && data.result.properties.name === "Sand Crawler" ? (
									images[1]
								) : data && data.result.properties.name === "X-34 landspeeder" ? (
									images[2]
								) : data && data.result.properties.name === "T-16 skyhopper" ? (
									images[3]
								) : data && data.result.properties.name === "TIE/LN starfighter" ? (
									images[4]
								) : data && data.result.properties.name === "Snowspeeder" ? (
									images[5]
								) : data && data.result.properties.name === "AT-AT" ? (
									images[6]
								) : data && data.result.properties.name === "TIE bomber" ? (
									images[7]
								) : data && data.result.properties.name === "AT-ST" ? (
									images[8]
								) : data && data.result.properties.name === "Storm IV Twin-Pod cloud car" ? (
									images[9]
								) : data && data.result.properties.name === "Sail barge" ? (
									images[10]
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

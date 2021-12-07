import React from "react";
import useSWR from "swr";
import { starWarsApiFetch } from "./planets";
import { useFavorites } from "../store/favorites";

import ATAT from "../../img/atat.png";
import ATST from "../../img/atst.jpg";
import Landspeeder from "../../img/landspeeder.jpeg";
import SailBarge from "../../img/SailBarge.jpeg";
import Sandy from "../../img/sandy.png";
import SkyHopper from "../../img/skyhopper.png";
import SnowSpeeder from "../../img/snowspeeder.jpg";
import StormCloudCar from "../../img/stormCloudCar.png";
import TieF from "../../img/tie-fighter.jpeg";
import TieB from "../../img/tieBomber.jpeg";

const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";
const images = {
	"1": Sandy,
	"2": Landspeeder,
	"3": SkyHopper,
	"4": TieF,
	"5": SnowSpeeder,
	"6": ATAT,
	"7": TieB,
	"8": ATST,
	"9": StormCloudCar,
	"10": SailBarge
};

export function Vehicles() {
	const { data, isValidating } = useSWR("/api/vehicles", starWarsApiFetch);
	const favorites = useFavorites();

	return (
		<div className="container">
			<div className="row">
				<h1>Coches</h1>
				{data &&
					data.results.map((item, index) => {
						return (
							<div className="col-sm-6 col-lg-3" key={index}>
								<div className="card">
									<img src={images[item.uid] || placeholder} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<a href={"/vehicles/" + item.uid} className="btn btn-primary">
											Go Somewhere
										</a>
										{favorites.favorites.some(fav => {
											return fav.uid === item.uid;
										}) ? (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.removeFavorite(item);
												}}>
												Remove Favorite
											</button>
										) : (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.addFavorite(item);
												}}>
												add favorite
											</button>
										)}
									</div>
									<a key={index} href={"/vehicles/" + item.uid}>
										{item.name}
									</a>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

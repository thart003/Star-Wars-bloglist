import React from "react";
import useSWR from "swr";
import { starWarsApiFetch } from "./planets";
import { useFavorites } from "../store/favorites";

const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";
const images = {
	"1": "https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2016/04/14608132418959.jpg",
	"2": "https://static.wikia.nocookie.net/starwars/images/5/54/X34-landspeeder.jpg/revision/latest?cb=20080316031428",
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
										{favorites.favorites.vehicles.some(fav => {
											return fav.uid === item.uid;
										}) ? (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.removeFavorite(item, "vehicles");
												}}>
												Remove Favorite
											</button>
										) : (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.addFavorite(item, "vehicles");
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

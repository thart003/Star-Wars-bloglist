import React from "react";
import useSWR from "swr";
import { starWarsApiFetch } from "./planets";
import { useFavorites } from "../store/favorites";

const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";
const images = {
	"1": "https://i.pinimg.com/originals/f2/7c/8b/f27c8b2e228ae33fc2eab2df58d506e6.jpg",
	"2": "https://www.renderhub.com/squir/star-wars-x-34-landspeeder/star-wars-x-34-landspeeder-01.jpg",
	"3":
		"https://static.wikia.nocookie.net/starwars/images/e/e1/Lukes_T-16_Skyhopper_TT.png/revision/latest?cb=20170520044701",
	"4": "https://static.wikia.nocookie.net/swbloodlines/images/3/3f/TIE_Ln.jpg/revision/latest?cb=20180311171411",
	"5":
		"https://static.wikia.nocookie.net/starwars/images/4/44/T-47_Speeder_DICE.png/revision/latest?cb=20151106063152",
	"6":
		"https://static.turbosquid.com/Preview/2015/12/31__05_03_50/AT_AT_0001.jpg49dc6f99-c24b-4d82-8d32-b6f5c7435af1Original.jpg",
	"7":
		"https://static.wikia.nocookie.net/battlefront/images/8/8b/Tie-bomber-hero-sm.jpg/revision/latest?cb=20170824161455",
	"8":
		"https://geekandsundry.com/wp-content/uploads/2016/04/star-wars-battlefront-endor-01-at-st-665x385-8htd_1280w.jpg",
	"9": "https://static.wikia.nocookie.net/starwars/images/3/3b/Cloud-car-v2.png/revision/latest?cb=20160617064429",
	"10": "https://static.wikia.nocookie.net/starwars/images/8/8c/Sail_Barge.png/revision/latest?cb=20130331043828"
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

import React from "react";
import useSWR from "swr";
import { starWarsApiFetch } from "./planets";
import { useFavorites } from "../store/favorites";

const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";
const images = {
	"4": "https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2016/04/14608132418959.jpg",
	"7": "https://oakthorne.net/wiki/images/X34-landspeeder.jpg",
	"6": "https://dnqe9n02rny0n.cloudfront.net/sets/images/11099/75081_alt_2_md.jpg",
	"8": "https://bbts1.azureedge.net/images/p/full/2021/01/0cbfc29f-020e-479d-98f4-18252af8a8fd.jpg",
	"14": "https://www.metalearth.com/content/images/thumbs/0000369_snowspeedertrade_1200.png",
	"18": "https://www.denofgeek.com/wp-content/uploads/2016/05/atat-walkers.jpg?fit=620%2C349",
	"16": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-7j-0ynSEWSeSDw0-q5cXwn1XgIwJr0i8Q&usqp=CAU",
	"19": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnFcZSaJTbsrFdxVBagdS9fyeY9Lqsj89MA&usqp=CAU",
	"20": "https://m.media-amazon.com/images/I/71xhRX2PQ3L._AC_SX425_.jpg",
	"24": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu54HofGy5oL0a9RWNvM_y4BXnOscZLUDTiA&usqp=CAU"
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

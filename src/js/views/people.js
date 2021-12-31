import React from "react";
import useSWR from "swr";
import { useFavorites } from "../store/favorites";
import "../../styles/people.scss";

const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";

const images = {
	"1":
		"https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
	"2":
		"https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/46/1479397679-c-3po-see-threepio-68fe125c.jpeg?crop=1xw:1.0xh;center,top&resize=1200:*",
	"3": "https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_silo.png",
	"4": "https://i.etsystatic.com/24442899/r/il/45f6cd/2488564047/il_570xN.2488564047_2cru.jpg",
	"5": "https://pm1.narvii.com/6690/c9dfdff22abbc0b755756a6e8c5e2d5ea220f605_hq.jpg",
	"6": "https://www.aceshowbiz.com/display/images/photo/2021/03/30/00168518.jpg",
	"7": "http://pm1.narvii.com/6168/ff4e27ef435e7191ca5429126c31754115a93776_00.jpg",
	"8": "https://bbts1.azureedge.net/images/p/full/2015/12/SSC11355_i.jpg",
	"9": "https://i.pinimg.com/originals/33/81/e5/3381e50f4b54339203c97b28c08ccbb8.jpg",
	"10": "https://www.pngitem.com/pimgs/m/510-5104121_star-wars-baby-clipart-clip-royalty-free-download.png"
};
export async function starWarsApiFetch(path) {
	const response = await fetch("https://www.swapi.tech" + path);
	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}
	throw new Error();
}

export function People() {
	const { data, isValidating } = useSWR("/api/people", starWarsApiFetch);
	const favorites = useFavorites();

	return (
		<div className="container">
			<div className="row">
				<h1>Personas</h1>
				{data &&
					data.results.map((item, index) => {
						return (
							<div className="col-sm-6 col-lg-3" key={index}>
								<div className="card">
									<img src={images[item.uid] || placeholder} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<a href={"/person/" + item.uid} className="btn btn-primary">
											Go Somewhere
										</a>
										{favorites.favorites.people.some(fav => {
											return fav.uid === item.uid;
										}) ? (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.removeFavorite(item, "people");
												}}>
												Remove Favorite
											</button>
										) : (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.addFavorite(item, "people");
												}}>
												add favorite
											</button>
										)}
									</div>
									<a key={index} href={"/people/" + item.uid}>
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

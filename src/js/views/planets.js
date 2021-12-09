import React from "react";
import useSWR from "swr";
import { useFavorites } from "../store/favorites";

const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";
const images = {
	"1":
		"https://cdna.artstation.com/p/assets/images/images/033/575/452/large/felipe-coelho-tatooine-editado.jpg?1609994598&dl=1",
	"2": "https://vulkk.com/wp-content/uploads/2020/04/SWTOR-Alderaan-Bonus-Series-Missions-Guide.jpg",
	"3":
		"https://images.hobbydatabase.com/processed_uploads/subject_photo/subject_photo/image/10873/1455555592-3-5887/yavin_large.PNG",
	"4": "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=960",
	"5":
		"https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2019%2F12%2FSTARWARS_EP5_190_L-900x0-850x560.jpg",
	"6": "https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_e589ba2c.jpeg?region=0%2C49%2C1560%2C780",
	"7":
		"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b985625e-0a09-4635-ae7a-f9a4d3f011be/dal07sk-641041ef-c3e7-4ab6-8dcb-07556d3e1a80.jpg/v1/fill/w_453,h_250,q_70,strp/endor_scouts_by_quintuscassius_dal07sk-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODI4IiwicGF0aCI6IlwvZlwvYjk4NTYyNWUtMGEwOS00NjM1LWFlN2EtZjlhNGQzZjAxMWJlXC9kYWwwN3NrLTY0MTA0MWVmLWMzZTctNGFiNi04ZGNiLTA3NTU2ZDNlMWE4MC5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Qz-1WMbIzZr713v85ppKvxANl31l-pagjSXGMSE7cTA",
	"8":
		"https://static3.srcdn.com/wordpress/wp-content/uploads/2021/09/Top-view-of-Naboo-buildings-in-Return-of-the-Jedi-Cropped.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5",
	"9": "https://www.endorexpress.net/wp-content/uploads/startours-coruscant.jpg",
	"10": "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Star-Wars-The-Bad-Batch-and-Kamino.jpg"
};

export async function starWarsApiFetch(path) {
	const response = await fetch("https://www.swapi.tech" + path);
	if (response.status === 200) {
		const payload = await response.json();

		return payload;
	}
	throw new Error();
}

export function Planets() {
	const { data, isValidating } = useSWR("/api/planets", starWarsApiFetch);
	const favorites = useFavorites();

	return (
		<div className="container">
			<div className="row">
				<h1>Mundos</h1>
				{data &&
					data.results.map((item, index) => {
						return (
							<div className="col-sm-6 col-lg-3" key={index}>
								<div className="card">
									<img src={images[item.uid] || placeholder} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<a href={"/planets/" + item.uid} className="btn btn-primary">
											Go Somewhere
										</a>
										{favorites.favorites.planets.some(fav => {
											return fav.uid === item.uid;
										}) ? (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.removeFavorite(item, "planets");
												}}>
												Remove Favorite
											</button>
										) : (
											<button
												className="btn btn-warning"
												onClick={() => {
													favorites.addFavorite(item, "planets");
												}}>
												add favorite
											</button>
										)}
									</div>
									<a key={index} href={"/planets/" + item.uid}>
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

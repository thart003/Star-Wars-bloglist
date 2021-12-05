import React from "react";
import useSWR from "swr";
import { useFavorites } from "../store/favorites";

const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";
const images = {};

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
		<div>
			<h1>planets</h1>
			{data &&
				data.results.map((item, index) => {
					return (
						<a key={index} href={"/planet/" + item.uid}>
							{item.name}
						</a>
					);
				})}
		</div>
	);
}

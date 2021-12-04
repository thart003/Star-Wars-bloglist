import React from "react";
import useSWR from "swr";
import { starWarsApiFetch } from "./planets";

export function Vehicles() {
	const { data, isValidating } = useSWR("/api/vehicles", starWarsApiFetch);
	return (
		<div>
			<h1>planets</h1>
			{data &&
				data.results.map((item, index) => {
					return (
						<a key={index} href={"/vehicles/" + item.uid}>
							{item.name}
						</a>
					);
				})}
		</div>
	);
}

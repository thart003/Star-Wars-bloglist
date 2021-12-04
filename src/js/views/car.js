import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { starWarsApiFetch } from "./Vehicles";

export function Car() {
    const params = useParams();
    const { data } = useSWR("/api/vehicles/" + params.id, starWarsApiFetch);

    return (
        <div>
            <h1>{data && data.result.properties.name}</h1>
        </div>
    );
}
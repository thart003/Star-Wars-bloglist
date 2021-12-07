import React from "react";
import useSWR from "swr";
export async function starWarsApiFetch(path) {
    const response = await fetch("https://www.swapi.tech" + path);
    if (response.status === 200) {
        const payload = await response.json();
        return payload;
    }
    throw new Error();
}
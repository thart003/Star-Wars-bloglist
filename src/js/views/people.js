import React from "react";
import useSWR from 'swr';

export async function starWarsApiFetch(path){
const response = await fetch("https://www.swapi.tech"+path);
if(response.status === 200){
    const payload = await response.json();

    return payload;
}
throw new Error();
}

export function People() {
    const { data, isValidating } = useSWR("/api/people", starWarsApiFetch);
    return (<div>
            <h1>people</h1>
            {data && data.results.map((item, index) => {
                return (
                <a key={index} href={"/people/" + item.uid}> 
                {item.name}
                </a>
    );
            })}
        </div>
        );
}

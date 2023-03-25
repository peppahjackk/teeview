import React from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface Teetimes {
    data: string[];
}

export const Main: React.FC = () => {
    const { data, error, isLoading }: UseQueryResult<Teetimes | undefined> =
        useQuery(["/api/teetimes"]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                paddingTop: 32,
                paddingBottom: 32,
            }}
        >
            <h3 className="text-xl pb-4">View tee times for William Devine</h3>
            {isLoading ? <p>Loading...</p> : null}
            {error ? <p>{error}</p> : null}
            {data == null || !(data instanceof Array) ? null : (
                <ul>
                    {data.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

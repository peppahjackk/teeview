import React from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface TeeTime {
    time: string;
    players: string;
}
interface Teetimes {
    data: TeeTime[];
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
            {error ? <p>{JSON.stringify(error)}</p> : null}
            {data == null || !(data instanceof Array) ? null : (
                <ul>
                    {data.map((item) => (
                        <li key={`WD-date-${item.time}`}>
                            {item.time} : {item.players}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

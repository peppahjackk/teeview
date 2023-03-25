import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
    const handleGenerate = () => {
        console.log("Button push");
    };

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
            <Button onClick={handleGenerate}>Generate</Button>
        </div>
    );
};

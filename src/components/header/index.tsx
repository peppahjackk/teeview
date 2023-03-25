import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <div className="text-center bg-gray-800 p-4" data-testid="container">
            <h1 className="text-4xl text-white font-bold">Teeview</h1>
        </div>
    );
};

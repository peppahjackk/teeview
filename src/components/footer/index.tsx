import React from "react";

export const Footer: React.FC = () => {
    const theYear = new Date().getFullYear();
    return (
        <div className="text-center py-5 bg-gray-800">
            <p className="text-white text-xl font-bold">
                Ted Moke &copy;{theYear}
            </p>
        </div>
    );
};

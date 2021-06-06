import React from "react";
import Projectcard from "./projectcard";

function ProjetBar() {
    return (
        <div className="bg-gray-300">
            <div className="flex  flex-col md:px-48 py-16">
                <div className="flex justify-between md:py-4 py-4">
                    <Projectcard />
                    <Projectcard />
                </div>
                <div className="flex justify-between  md:py-4 py-4">
                    <Projectcard />
                    <Projectcard />
                </div>
            </div>
        </div>
    );
}

export default ProjetBar;

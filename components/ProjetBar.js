import React from "react";
import Projectcard from "./projectcard";

function ProjetBar() {
    return (
        <div className="bg-gray-100 ">
            <div className="flex  flex-col md:px-48 py-16">
                <div className="flex  md:flex-row flex-col justify-between md:py-4 py-4">
                    <Projectcard />
                    <Projectcard />
                </div>
                <div className="flex  md:flex-row flex-col justify-between md:py-4 py-4">
                    <Projectcard />
                    <Projectcard />
                </div>
            </div>
        </div>
    );
}

export default ProjetBar;

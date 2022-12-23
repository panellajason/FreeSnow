import "../../styles/HomePage.css"
import { lazy, Suspense } from "react";
import React from "react";
const Map = React.lazy(() => import('../Map'))

const HomePage = () => {
    return (
        <div className="mainContainer">
            <div className="mapAndTextContainer">
                <div className="homePageText">Current U.S. Avalanche Conditions:</div>
                <Map/>
            </div>
        </div>
    );
}
 
export default HomePage;
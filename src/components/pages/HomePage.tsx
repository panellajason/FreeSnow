import "../../styles/HomePage.css"
import { lazy } from "react";
import AvalancheRatingCollection from "../AvalancheRatingCollection"
import ProjectTile from "../ProjectTile";
const Map = lazy(() => import('../Map'))

const HomePage = () => {
    return (
        <div className="mainContainer">
            <div className="topContainer">
                <div className="mapAndTextContainer">
                    <div className="homePageText">Current U.S. Avalanche Conditions:</div>
                    <Map/>
                    <AvalancheRatingCollection></AvalancheRatingCollection>
                </div>
                <div className="spacer"></div>
                <div className="mapAndTextContainer">
                    <div className="homePageText">Recent snow news:</div>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <ProjectTile href={""} logo={""} title={"Atmospheric River Headed To The West- Powder Alert- Dodge the winds and warmer air. ge the wge the winds and warmer air.inds and warmer air."}></ProjectTile>
                    <div className="homePageText">View more</div>
                </div>
            </div>
            <div className="homePageTitleText">Precipitation outlook:</div>
            <div className="bottomContainer">
                <a className="forecastImageWrapper" target={"_blank"} href="https://www.wpc.ncep.noaa.gov/qpf/p120i.gif?1431475251"> 
                    <img className="forecastImage" src="https://www.wpc.ncep.noaa.gov/qpf/p120i.gif?1431475251"></img>
                </a>
                <a className="forecastImageWrapper" target={"_blank"} href="https://www.cpc.ncep.noaa.gov/products/predictions/610day/610prcp.new.gif"> 
                    <img className="forecastImage" src="https://www.cpc.ncep.noaa.gov/products/predictions/610day/610prcp.new.gif"></img>   
                </a>
            </div>
            <div className="homePageTitleText">Temperature outlook:</div>
                <div className="bottomContainer">
                    <a className="forecastImageWrapper" target={"_blank"} href="https://www.cpc.ncep.noaa.gov/products/predictions/610day/610temp.new.gif"> 
                        <img className="forecastImage" src="https://www.cpc.ncep.noaa.gov/products/predictions/610day/610temp.new.gif"></img>   
                    </a>
                    <a className="forecastImageWrapper" target={"_blank"} href="https://www.cpc.ncep.noaa.gov/products/predictions/814day/814temp.new.gif"> 
                        <img className="forecastImage" src="https://www.cpc.ncep.noaa.gov/products/predictions/814day/814temp.new.gif"></img>   
                    </a>
            </div>
            <div className="homePageTitleText">Live radar:</div>
                <div className="bottomContainer">
                    <a className="forecastImageWrapper" target={"_blank"} href="https://s.w-x.co/staticmaps/wu/wu/wxtype1200_cur/conus/current.png"> 
                        <img className="forecastImage" src="https://s.w-x.co/staticmaps/wu/wu/wxtype1200_cur/conus/current.png"></img>   
                    </a>
                    <a className="forecastImageWrapper" target={"_blank"} href="https://cdn.star.nesdis.noaa.gov/GOES17/ABI/CONUS/GEOCOLOR/20223610236_GOES17-ABI-CONUS-GEOCOLOR-2500x1500.jpg"> 
                        <img className="forecastImage" src="https://cdn.star.nesdis.noaa.gov/GOES17/ABI/CONUS/GEOCOLOR/20223610236_GOES17-ABI-CONUS-GEOCOLOR-2500x1500.jpg"></img>   
                    </a>
            </div>
        </div>
    );
}
 
export default HomePage;
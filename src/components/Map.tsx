import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { lazily } from 'react-lazily';
import L from "leaflet";
const { GeoJSON,  MapContainer, TileLayer } = lazily(() => import('react-leaflet'));
import 'leaflet/dist/leaflet.css';
import "../styles/Map.css";
import TestData from "../test/testData.json";
import type { GeoJsonObject } from 'geojson';
import openLogo from '/openLogo.jpeg'

const Map = () => {

    const avalancheCenterData = useRef<GeoJsonObject>();
    const [data, setData] = useState<any>();

    // useEffect(() => { 
    //     fetch('https://api.avalanche.org/v2/public/products/map-layer')
    //     .then((response) => {
    //         response.json().then(response => {
    //             avalancheCenterData.current = response;
    //             setData(response)
    //         })
    //     })
    // }, [])

    const onEachFeature = (feature: GeoJSON.Feature, layer: any) => {
        if (feature.properties) {
            const avalancheCenter: GeoJSON.GeoJsonProperties = feature.properties;

            switch(avalancheCenter.danger_level) {
                case 1:
                    layer.options.color = "green";
                    break;
                case 2:
                    layer.options.color = "yellow";
                    break;
                case 3:
                    layer.options.color = "orange";
                    break;
                case 4:
                    layer.options.color = "red";
                    break;
                case 5:
                    layer.options.color = "black";
                    break;
                default: 
                    layer.options.color = "blue";
                    break;
            }

            layer.options.fillOpacity = .5
            layer.bindTooltip(
                `<Tooltip>${avalancheCenter.name}</Tooltip>`
            )
            layer.bindPopup(
                `<div style="display: flex; justify-content: center; text-align: center;">
                    <div style="
                        color: ${layer.options.color}; 
                        text-shadow: -.5px -.5px 0 #000, .5px -.5px 0 #000, -.5px .5px 0 #000, .5px .5px 0 #000;
                        font-size: 20px;
                    ">
                        ${avalancheCenter.danger.toUpperCase()}
                    <div style="color: black; text-shadow: none; font-size: 15px;">View: 
                        <a href="${avalancheCenter.center_link}" target="_blank">${avalancheCenter.name}</a>
                    </div>
                </div>`
            );
            layer.on({
                mouseover: onMouseOver,
                mouseout: onMouseOut,
                click: () => layer.closeTooltip()
            })
        }
    }

    const onMouseOver = (event: any) => {
        event.target.bringToFront()
        event.target.setStyle({
            fillOpacity: 1,
            outline: 0
        });
    }
    
    const onMouseOut = (event: any) => {
        event.target.bringToBack()
        event.target.setStyle({
            fillOpacity: .5
        });
    }

    return (
        <div className="mainMapContainer">
            {avalancheCenterData.current !== undefined ? (
                <div> Loading </div> 
            ) : (
            <MapContainer 
                center={[41.987234, -114.033030]} 
                zoom={5.3} 
                style={{ height:"550px", width: "100%", backgroundColor:"100%",marginTop:"10px", marginBottom:'50px', borderRadius: '10px'}}
            >
                <Suspense>Error
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <GeoJSON data={TestData as GeoJsonObject} onEachFeature={onEachFeature}/>
                </Suspense>
            </MapContainer>
            )}
        </div>
    );
}
 
export default Map;
import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
    return (
        <div className = "map">
           {/* from the react-leaflet package */}
           <LeafletMap center={center} zoom={zoom}>

           <TileLayer
        //    from docs ...
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

{/* loop through countries and draw circles based on cases */}
{showDataOnMap(countries, casesType)}
           </LeafletMap>
        </div>
    )
}

export default Map

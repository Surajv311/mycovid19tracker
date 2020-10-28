import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";
function Map() {
    return (
        <div className = "map">
           {/* from the react-leaflet package */}
           <LeafletMap>

           <TileLayer
        //    from docs ...
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

           </LeafletMap>
        </div>
    )
}

export default Map

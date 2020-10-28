import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

// util is for utilities we add in our proj...

// we need to sort the data in the table with the number of covid cases 
export const sortData = (data) => {
    let sortedData = [...data];
    // using sort() 
   return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1 ));

  };

  // similar to 
/*
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
  */ 

  //  from doc.. dictionary...
const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};


export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
  
// draw circles on map with interactive tip 
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
    // for the circles that pop up 
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        // you may alter the multiplier 
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
          // this div is for background image ...
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div 
          // for country ....
           className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

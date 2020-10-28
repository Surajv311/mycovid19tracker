import { 
  FormControl, 
  MenuItem,
  Select,
  Card,
  CardContent, } from "@material-ui/core";
import React , {useState, useEffect} from "react"; 
import './App.css'; 
import InfoBox from "./InfoBox"; 
import Map from "./Map"; 
import Table from "./Table"; 
import {sortData} from "./util"; 
import LineGraph from "./LineGraph"; 
import "leaflet/dist/leaflet.css";




function App() {

// using hooks = They let you use state and other React features without writing a class.
const [countries, setCountries] = useState([]); //["US", "Belgium", "Japan"]
const [country, setCountry] = useState('worldwide'); 
const [countryInfo , setCountryInfo] = useState({}); 
const [tableData , setTableData ] = useState([]); 
// latitude & longitude 
const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
// map zoom 
const [mapZoom, setMapZoom] = useState(3);


// adding another use effect for the worldwide option in dropdown 
useEffect(()=> {

fetch("https://disease.sh/v3/covid-19/all")
.then(response => response.json())
.then(data =>{
  setCountryInfo(data); 
})
} , []); 

// useEffect = its a hook that runs a piece of code based on the given condition 
  
useEffect(() => {
  // the code inside this would run only once when the component loads and not again ... would fire off the code once...
// async function = send a req, get it and manipulate it...
const getCountriesData = async() => {
  await fetch("https://disease.sh/v3/covid-19/countries") // then what we do is :
  .then((response) => response.json()) //we take only the json part from the API data in response.json() 
  .then((data) =>{
const countries = data.map((country)=>({
  name: country.country, // like United Kingdom...
  value: country.countryInfo.iso2 // like UK...
}));
 
// bringing in sorted function to sort the table data with covid cases 
let sortedData = sortData(data); 

setCountries(countries); // we'll map through...
  
setMapCountries(data);
// to display hotspots of covid cases to display in map 

//setTableData(data); // data for tables 
setTableData(sortedData); // passing sorted data for tables , earlier data passed alphabetically but now the data passed is sorted 

});
};
getCountriesData() ; // calling function 

}, []);

const onCountryChange = async(event)=> {

const countryCode = event.target.value ; 

setCountry(countryCode); 
// so now we would stick to the option we choose from the dropdown 

//  now we want to display stats of country we select ... earlier it was just listening... now it must perform additional tasks...
// would be different for individual countries cases and worldwide cases.
// so we use terenary operator for that 
const url = countryCode==='worldwide' ? 
'https://disease.sh/v3/covid-19/all' 
: `https://disease.sh/v3/covid-19/countries/${countryCode}`
// we use `` to insert JS in the url...

// adding one more state.. hooks -> countryInfo 


await fetch(url) // similar to previous...
.then(response => response.json())
.then (data => {
setCountryInfo(data); 
setCountry(countryCode); 
// to hover and move to the country in map when we select country from dropdown 
setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
setMapZoom(4);
})

};

// console.log("country info" , countryInfo);

return (
    <div className="app">
    {/* app__left & app__right containers */}

    <div className= "app__left">
        <div className="app__header"> 
        {/* Creating dropdowns and header... */}
        
      <h1>Live COVID19 Tracker App</h1>
    
    {/* FormControl tag is in MaterialUI */}
    {/* adding BEM convention of naming */}
    {/* adding dropdown */}
    <FormControl className="app__dropdown">

{/* adding dropdown..using the variant shown... Select tag in MaterialUI */}
<Select variant = "outlined" onChange = {onCountryChange } value = {country}> {/* adding onChange as when we click a country in the dropdown then no function is listening to that change...the would remain the default one i.e worldwide.. so we need to add the fuction shown  */}
{/* adding option for entire world */}
<MenuItem value = "worldwide">Worldwide</MenuItem>

{/* to give dropdowns of options we use MenuItem tag */}
{/* <MenuItem value = "world"> test</MenuItem>
<MenuItem value = "world"> eqw</MenuItem> */}

{/* NOW instead of multiple menu item we must instead loop through one... */}

{/* {countries.map((country)=> (

  <MenuItem value = {country}> {country}</MenuItem>
)
)} */}
{/* NOW Better than that we can make API call from website */}
{countries.map((country)=> (

<MenuItem value = {country.value}> {country.name}</MenuItem>
)
)}

</Select>
      


    </FormControl>
    
        </div>

        {/* Now we need to create info boxes after creating dropdowns in above part */}
        <div className="app__stats"> 
        {/* Creating Infoboxes */}
        {/* Check InfoBox.js */}
        
        <InfoBox title= "COVID Cases" cases = {countryInfo.todayCases} total =  {countryInfo.cases} />
        {/* adding the live info that we get from API */}
        <InfoBox title= "Recovered" cases =  {countryInfo.todayRecovered} total = {countryInfo.recovered}/>
        <InfoBox title= "Deaths" cases =  {countryInfo.todayDeaths} total =  {countryInfo.deaths}/>       
        </div>
    
      {/* Create Map component js file */}
      <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />


</div>


<Card className= "app__right">
<CardContent>

<h3> Live Cases by Country </h3>
{/* now we add a table */}
{/* we need to sort the data with case numbers and display it on the table  */}
<Table countries = {tableData} />
<h3> Worldwide new cases</h3>
{/* now to add a line graph */}

<LineGraph/>

</CardContent>
</Card>






    </div>
  );
}

export default App;

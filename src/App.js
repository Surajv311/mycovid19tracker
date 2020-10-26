import { 
  FormControl, 
  MenuItem,
  Select,
  Card,
  CardContent, } from "@material-ui/core";
import React , {useState, useEffect} from "react"; 
import './App.css'; 

function App() {

// using hooks = They let you use state and other React features without writing a class.
const [countries, setCountries] = useState([]); //["US", "Belgium", "Japan"]
const [country, setCountry] = useState('worldwide'); 

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
 
setCountries(countries); // we'll map through...
  });
};
getCountriesData() ; // calling function 

}, []);

const onCountryChange = async(event)=> {

const countryCode = event.target.value ; 

setCountry(countryCode); 
// so now we would stick to the option we choose from the dropdown 
};

return (
    <div className="app">
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
        
        
        
        
        
        
        
        
        </div>
    
    </div>
  );
}

export default App;

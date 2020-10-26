import { 
  FormControl, 
  MenuItem,
  Select,
  Card,
  CardContent, } from "@material-ui/core";
import React , {useState} from "react"; 
import './App.css'; 

function App() {

// using hooks = They let you use state and other React features without writing a class.
const [countries, setCountries] = useState(["US", "Belgium", "Japan"]); 

  return (
    <div className="app">
        <div className="app__header"> 
        
        
      <h1>Live COVID19 Tracker App</h1>
    
    {/* FormControl tag is in MaterialUI */}
    {/* adding BEM convention of naming */}
    {/* adding dropdown */}
    <FormControl className="app__dropdown">

{/* adding dropdown..using the variant shown... Select tag in MaterialUI */}
<Select variant = "outlined" value = "abc">
{/* to give dropdowns of options we use MenuItem tag */}
{/* <MenuItem value = "world"> test</MenuItem>
<MenuItem value = "world"> eqw</MenuItem> */}

{/* NOW instead of multiple menu item we must instead loop through one... */}

{countries.map((country)=> (

  <MenuItem value = {country}> {country}</MenuItem>
)
)}
{/* NOW Better than that we can make API call from website */}
</Select>
      


    </FormControl>
    
        </div>

    
    </div>
  );
}

export default App;

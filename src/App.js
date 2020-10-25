import { 
  FormControl, 
  MenuItem,
  Select,
  Card,
  CardContent, } from "@material-ui/core";
import React from "react"; 
import './App.css'; 

function App() {
  return (
    <div className="app">
        <div className="app__header"> 
        
        
      <h1>my_Covid19 Tracker App</h1>
    
    {/* FormControl tag is in MaterialUI */}
    {/* adding BEM convention of naming */}
    {/* adding dropdown */}
    <FormControl className="app__dropdown">

{/* adding dropdown..using the variant shown... Select tag in MaterialUI */}
<Select variant = "outlined" value = "abc">
{/* to give dropdowns of options we use MenuItem tag */}
<MenuItem value = "world"> test</MenuItem>
<MenuItem value = "world"> eqw</MenuItem>

</Select>
      


    </FormControl>
    
        </div>

    
    </div>
  );
}

export default App;

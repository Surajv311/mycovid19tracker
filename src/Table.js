import React from 'react';
import './Table.css'; 
import numeral from "numeral";

// passing es6 props in the function 
function Table({countries}) {
    return (
        <div className = "table">
        
{/* creating table row */}
           {/* {countries.map(({country,cases}) =>(


<tr>
<td>{country}</td>
<td>
    <strong> {cases} </strong>
</td>

</tr> 

    )  )}  */}
      
    {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}

        </div>
    );
}

export default Table

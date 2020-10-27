import React from 'react'

// passing es6 props in the function 
function Table({countries}) {
    return (
        <div className = "table">
        
{/* creating table row */}
           {countries.map(({country,cases}) =>(


<tr>
<td>{country}</td>
<td>
    <strong> {cases} </strong>
</td>

</tr> 

    )  )} 
      
        </div>
    );
}

export default Table

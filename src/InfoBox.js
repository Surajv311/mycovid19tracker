import React from 'react';
import {Card, CardContent, Typography}  from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({title,cases, total}) {
    return (
        // using Cards from materialUI
        <Card className = "infoBox">
            <CardContent>
                {/* adding title ... and info */}
<Typography className = "infoBox__total"  color= "textInfo">
{/* title parameter passed */}
{title}
</Typography>

<h2 className = "infoBox__cases">{cases}</h2>

<Typography className = "infoBox__total" color= "textInfo">
{total} Total 
</Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox

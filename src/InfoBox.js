import React from 'react';
import {Card, CardContent, Typography}  from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
    return (
        // using Cards from materialUI
        // <Card className = "infoBox">
        <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        }`}
      >
            
            
            <CardContent>


                {/* adding title ... and info */}
{/* <Typography className = "infoBox__total"  color= "textInfo">
{/* title parameter passed *
{title}
</Typography> */}

{/* THE REFRACTORED VERSION IS :  */}


<Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>


<h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

<Typography className = "infoBox__total" color= "textInfo">
{total} Total 
</Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox

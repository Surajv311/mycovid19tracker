import React, {useState , useEffect} from 'react'
import {Line} from 'react-chartjs-2'; 
import numeral from "numeral";


const options = {

    // from documentation 
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };
  

     
    
  const buildChartData = (data,casesType = "cases") => {

    const chartData = [] ; 
    let lastDataPoint ; 
    // taking cases from the data we get from API
    // its a dictionary object  
 for(let date in data.cases){
        if(lastDataPoint){
            // follow chartJS documentation 
    const newDataPoint = {
        x : date , 
        y: data[casesType][date] - lastDataPoint // we get the difference between cases of two dates to get the everyday new cases 
    
    }
    
    chartData.push(newDataPoint); 
    
    
        }
    
    
        lastDataPoint = data[casesType][date]; 
    }
    
    return chartData ; 
    
        };



function LineGraph({ casesType }) {
    const [data,setData] = useState({}); 
    
 
    
    useEffect(() => {
        const fetchData = async () => {
            // taking data from last 180 days 
          await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=180")
            .then((response) => {
              return response.json();
            })
.then ( (data) => {
// console.log(data);

let  chartData = buildChartData(data,casesType); 
setData(chartData); 


});
    };
    fetchData();
    
},
 [casesType]);



    return (
        <div>
            {/* added Line from chart JS (from import) */}
            {data?.length > 0 && (
        <Line
        

         data = {{

            datasets : [{

                backgroundColor: "#f1f3de" ,
                borderColor: "#e7305b",
                data:data
                
                
                },
                ],

         }}

            options = {options}
        />
    )}
        {/* the data parameter takes an object */}
        {/* we are having line graph so we need data of X & Y axis ... */}
        </div>
    );
}

export default LineGraph;

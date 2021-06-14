import React from "react";
import "./Weather.css";

export default function Weather (){
    return (
        <div className="Weather"> 
        <form>
            <input type="search"
            placeholder="Enter your city"
            className="form-control"/>
            <input
            type="submit" value="search" className="btn btn-primary"/>
        </form>
        <h1>New York</h1>
        <ul>
<li> Wednesday</li>
<li>Mostly cloudy</li>
        </ul>
<div className="row">
    <div className="col-6">
        <img src="https://www.wpclipart.com/weather/weather_icons/weather_icons_2/partly_cloudy.png"
        alt="partlycloudy"/>
    </div>
    <div className="col-6">
    <ul>
<li> 
    Precipitation
</li>
<li>Humidity 

</li>
<li>Wind 
    
</li>
</ul>

    </div>
</div>
        
        </div>) 
}
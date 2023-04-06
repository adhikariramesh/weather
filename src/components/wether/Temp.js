// https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=4933bd5d777521cfb4df199ba91116ca

import React, { useEffect, useState } from 'react';
import "./style.css";
import image from "./image/wi-day-sunny.svg";
import image1 from "./image/wi-hail.svg";
import image2 from "./image/wi-humidity.svg";
import image3 from "./image/wi-wind-beaufort-0.svg";
const Temp = () => {
    const [inputData, setInputData] = useState("Gaur");
    const [tempInfo, setTempInfo] = useState({});


    const searchWeather = async() =>{
        // console.log(inputData);
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=4933bd5d777521cfb4df199ba91116ca`;

            const res = await fetch(url);
            const data = await res.json();
           const {temp, pressure, humidity} = data.main;
           const {main: wethermood} = data.weather[0];
           const {name} = data;
           const {speed} = data.wind;
           const {country, sunset} = data.sys;
           const wetherInfo = {
            temp, pressure, humidity, wethermood, name, speed,
            country, sunset
           }
           setTempInfo(wetherInfo);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(()=>{
        searchWeather();
    },[]);
  return (
    <>
      <div className="main-container">

        {/* search section */}
        <div className="search-body">
            <div className="search">
                <input type="text" name='searchBox' className='searchBox' placeholder='🔎 Search here....' 
                autoFocus
                value={inputData}
                onChange={(e)=>setInputData(e.target.value)}/>
                <button className='btn' onClick={searchWeather}>Search</button>
            </div>
        </div>

            {/* main box */}
            <div className="container">
                <div className="img-body">
                    <img src={image} alt="" />
                </div>
                <div className="center-section">
                    <div className="temp">
                        <h2>{tempInfo.temp}<span>&#176;</span></h2>
                        <p>{tempInfo.wethermood}<br /> <span className='location'>{tempInfo.name}</span><span className='location'>{tempInfo.country}</span></p>
                    </div>
                    <div className="currentDate">
                        <h2 className='datetime'>
                       {new Date().toLocaleString()}
                        </h2>
                    </div>
                </div>

                {/* bottom section */}
            <div className="bottom-section">
                <div className="tow-div-section">
                    <div className="img-icons">
                        <img src={image} alt="" />
                    </div>
                    <div className="content">
                        <p>{new Date().toLocaleTimeString()}</p>
                        <p>{tempInfo.sunset}</p>
                    </div>
                </div>
                <div className="tow-div-section">
                    <div className="img-icons">
                        <img src={image2} alt="" />
                    </div>
                    <div className="content">
                        <p>{tempInfo.humidity}</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="tow-div-section">
                    <div className="img-icons">
                        <img src={image1} alt="" />
                    </div>
                    <div className="content">
                        <p>Pressure</p>
                        <p>{tempInfo.pressure}</p>
                    </div>
                </div>
                <div className="tow-div-section">
                    <div className="img-icons">
                        <img src={image3} alt="" />
                    </div>
                    <div className="content">
                        <p>Wind</p>
                        <p>{tempInfo.speed}</p>
                    </div>
                </div>
            </div>
            </div>

            
      </div>
    </>
  )
}

export default Temp

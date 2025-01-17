import React, { useEffect, useState } from "react";
import axios from 'axios';
import SignalWifiOffIcon from '@mui/icons-material/SignalWifiOff';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './card.css';

const HouseList = () => {
    const[houses,setHouses] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/getHouses')
      .then(houses => setHouses(houses.data))
      .catch(err => console.log(err))
    },[])

  return (
    <div>
      <div className="work-section-wrapper">
        <div className="work-section-bottom">
          {
              houses.map((house => {
                  return <div className="card-section-info" key={house.name}>
                      <div className="info-boxes-img-container" key={house.location}>
                          <img src="./assets/delivery-image.png" alt="" />
                      </div>
                      <h2>{house.name}</h2>
                      <p>{house.location}</p>
                      <p><CurrencyRupeeIcon/>{house.rent}</p>
                      <div className="features">
                        {house.wifi ? <SignalWifi4BarIcon className="icon-dark" /> : <SignalWifiOffIcon className="icon-light" />}
                        {/* Add more features similarly */}
                      </div>
                  </div>
              }
          ))}
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="imgbox">
              <div className="ribbon">
                <div className="rent-box">₹ 10,000/-</div>
              </div>
            </div>
            <div className="details">
              <div className="title">home</div>
              <div className="location">location</div>
              <div className="features">
                <SignalWifi4BarIcon className="icon-dark" />
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HouseList;
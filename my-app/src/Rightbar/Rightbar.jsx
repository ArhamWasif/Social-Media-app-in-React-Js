import React from "react";
import "./Rightbar.css";
import gift from "./gift.png";
import ad from "./ad.png";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="birthday">
        <div className="birth">
          <img className="image6" src={gift} />
          <div className="title1">
            <strong> Pola Foster </strong> and <b>3 others friends </b> have a
            birthday today.
          </div>
        </div>
      </div>
      <div className="rightbarad">
        <img className="image7 " src={ad} />
      </div>
      <div className="online">
        <div className="title2" >Online Friends</div>
        <div className="onlineconta">
          <img className="image8" src={ad} />
          <span className="dot"></span>
          <div className="name1 ">Sofak Kocagalu</div>
        </div>
        <div className="onlineconta">
          <img className="image8" src={ad} />
          <span className="dot"></span>
          <div className="name1 ">Abdullah Ali</div>
        </div>
        <div className="onlineconta">
          <img className="image8" src={ad} />
          <span className="dot"></span>
          <div className="name1 ">Ali Rehman</div>
        </div>
        <div className="onlineconta">
          <img className="image8" src={ad} />
          <span className="dot"></span>
          <div className="name1 ">Rehan Junaid</div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Rightbar;

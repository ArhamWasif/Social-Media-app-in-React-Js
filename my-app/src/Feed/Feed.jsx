import React from "react";
import "./Feed.css";
import caw from './caw.jpeg'

const Feed = () => {
    
  return (
    <>
    <div className="containerfeed">
      <div className="containers">
        <img className="image3" src={caw}/>
        <div className="text">What's in your mind Safak?</div>
      </div>
      <hr />
      <div className="container2">
        <div className="photoor">Photo or Video</div>
        <div className="tag">Tag</div>
        <div className="location">Location</div>
        <div className="feelings">Feelings</div>
        <button className="btn2">Share</button>
      </div>
    </div>
    
    </>
  );
};

export default Feed;

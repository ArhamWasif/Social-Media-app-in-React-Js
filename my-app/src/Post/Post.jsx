import React from 'react'
import './Post.css'
import caw from './caw.jpeg'
import g from './g.jpeg'
const Post = () => {
  return (
    <div>
        
        <div className="post">
        <div className="conta">
            <img className="image4" src={caw}/>
        <div className="name">
            Sofak Kocagalu
            
            </div>
            <div className="time">
            5 mins ago
            </div>
            <div className="open">
            :
            </div>
        </div>
        <p className="desc">Love For All, Hatred For None.</p>
        <img className="image5" src={g}/>
        
        
    





    </div>
    </div>
  )
}

export default Post
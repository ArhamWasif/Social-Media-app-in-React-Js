import React from 'react'
import './Topbar.css'
import caw from '../Topbar/caw.jpeg'
const Topbar = () => {
  return (
    <div className='container'>
        <div className='title'>
            Caw Social


        </div>
        <div className='search1 '>
            <input type='text' className='search ' placeholder='Search for friend,Post, or video'/>


        </div>

        <div className='text1'>HomePage</div>
        <div className='text2'>Timeline</div>
        <img  className='image1' src={caw}/>






    </div>
  )
}

export default Topbar
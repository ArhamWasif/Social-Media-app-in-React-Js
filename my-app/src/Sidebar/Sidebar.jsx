import React from 'react'
import './SIdebar.css'
import caw from './caw.jpeg'
import { createTheme } from '@mui/material/styles';
const Sidebar = () => {
  return (
    <div className='container1'>
        <div className='side'>
            <span><createTheme /></span>
            <div className='side1'>Feed </div> 
        </div>
        <div className='side'>
            <div className='side1'>Feed </div> 
        </div>
        <div className='side'>
            <div className='side1'>Feed </div> 
        </div>

        <div className='side'>
            <div className='side1'>Feed </div> 
        </div>
        <div className='side'>
            <div className='side1'>Feed </div> 
        </div>
        <button className='btn1'>Show More</button>
        <hr/>
        <div className='frn'>
        <img className='image2 ' src={caw}/>
        <label  className='lbl' >Sofak kocagalu</label>

        </div>
        <div className='frn'>
        <img className='image2 ' src={caw}/>
        <label  className='lbl' >Sofak kocagalu</label>

        </div>


        <div className='frn'>
        <img className='image2 ' src={caw}/>
        <label  className='lbl' >Sofak kocagalu</label>

        </div>
        <div className='frn'>
        <img className='image2 ' src={caw}/>
        <label  className='lbl' >Sofak kocagalu</label>

        </div>



    </div>
  )
}

export default Sidebar
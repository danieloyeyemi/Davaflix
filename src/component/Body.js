import React from 'react'
import bootstrap from 'bootstrap'
import './style.css'
import annie from '../asset/image/annie-en-20220523-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
import MyCard from './MyCard'
function Body() {
  return (
    <>
    <div className='bb bg-dark'>
    <img src={annie} alt=""  id='ann'/>
    <div className='d-flex flex-wrap justify-content-evenly'>
    <MyCard/>
    </div>
    </div>
    </>
  )
}

export default Body
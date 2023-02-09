import React from 'react'
import './Body.css'
import body from '../../Assests/topImage.jpeg'

const Body = () => {
  return (
    <>
        <div className="body">
            <div className='body-img-left'>
                <img className='img-left' src= {body} alt="" />
                <div className='body-img-left-text'>
                    <h3>Title of vertical gallery</h3>
                    <p>Travel / August 21 2017</p>
                </div>
            </div>

            <div className='body-img-right-1'>
                <img className='img-right' src= {body} alt="" />
                <div className='body-img-right-text-1'>
                    <h5>Title of vertical gallery</h5>
                    <p>Travel / August 21 2017</p>
                </div>  
            </div>

            <div className='body-img-right-2'>
                <img className='img-right' src= {body} alt="" />
                <div className='body-img-right-text-2'>
                    <h5>Title of vertical gallery</h5>
                    <p>Travel / August 21 2017</p>
                </div>  
            </div>  
        </div>
    </>
  )
}

export default Body
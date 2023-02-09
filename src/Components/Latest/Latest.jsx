import React from 'react'
import './Latest.css'
const Latest = (props) => {
  return (
    <>
        
          <h2 className='latestHeading'>The Latest</h2>
          <div className='latestEmpty'></div>
          <div className="latest">
          {
            props.data.map((element) => {return  (
            <div key={element.id} className='latest-component'>
              <img className='latestImage' src={element.image} alt=''/>
              <h3 className='latestTitle'>{element.title}</h3>
              <p className='latestDescription'>{element.sub_title}</p>
              <p className='latestDate'>{element.date}</p>
            </div>
            )} 
            )
          }
          </div>

    </>
  )
}

export default Latest
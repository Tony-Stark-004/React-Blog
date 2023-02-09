import React from 'react'
import './Anime.css'
const Anime = (props) => {
  return (
    <>
        
          <h2 className='animeHeading'>Anime Section</h2>
          <div className='animeEmpty'></div>
          <div className="anime">
          {
            props.data.map((element) => {return  (
            <div key={element.id} className='anime-component'>
              <img className='animeImage' src={element.image} alt=''/>
              <h3 className='animeTitle'>{element.title}</h3>
              <p className='animeDescription'>{element.sub_title}</p>
              <p className='animeDate'>{element.date}</p>
            </div>
            )} 
            )
          }
          </div>

    </>
  )
}

export default Anime
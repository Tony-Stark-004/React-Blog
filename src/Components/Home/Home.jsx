import React from 'react'
import Anime from '../Anime/Anime'
import Body from '../Body/Body'
import {anime} from '../../theLatest'
import Latest from '../Latest/Latest'

const Home = (props) => {
  return (
    <>
        <Body />
        <Latest data={props.data} />
        <Anime data={anime} />
    </>
  )
}

export default Home
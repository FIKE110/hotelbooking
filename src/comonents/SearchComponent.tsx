import React from 'react'
import HoteImage from "../assets/pexels-vecislavas-popa-1743231.jpg"
import '../styles/default.css'
import { Rating } from '@mui/material'

const SearchComponent = () => {
  return (
    <div>
        <div>
            <img src={HoteImage} />
        </div>
        <div>
            <p className='poppins-bold'>Oceanic hotel</p>
            <Rating name='hotelhalf' defaultValue={2.5} precision={0.5} readOnly/>
        </div>
    </div>
  )
}

export default SearchComponent
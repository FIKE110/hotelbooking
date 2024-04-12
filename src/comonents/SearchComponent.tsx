import '../styles/default.css'
import { Rating } from '@mui/material'
import HotelData from '../types'

const SearchComponent = ({data}:{data:HotelData}) => {
    const {hotel_image,hotel_name,address,city,price_per_night,rating} = data
  return (
    <div className='search-component'>
        <div className='image-container'>
            <img src={hotel_image} />
        </div>
        <div className='desc-container' style={{paddingTop:8}}>
            <p className='poppins-bold'>{hotel_name}</p>
            <p className='poppins-medium'>{address}</p>
            <p className='poppins-medium'>{city}</p>
            <p className='poppins-medium'>{price_per_night}</p>
            <Rating name='hotelhalf' defaultValue={rating} precision={0.5} readOnly/>
        </div>
    </div>
  )
}

export default SearchComponent
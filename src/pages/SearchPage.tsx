import React from 'react'
import "../styles/search.css"
import SearchImage from '../assets/icons8-search-100.png'
import ProfileHeading from '../comonents/ProfileHeading'
import hotelTest from '../test/hotelTest'
import SearchComponent from '../comonents/SearchComponent'


const SearchPage = () => {
  return (
    <div id="search-page">
          <div id='header-panel'> 
        <div style={{display:"inline-block"}}>
          <h1 style={{
            color:'white'
          }}>SereneStay</h1>
        </div>
          <ProfileHeading />
        </div>
        <div id="search-container">
            <input type="text" />
            <div id='search-button'>
                <img src={SearchImage} />
            </div>
        </div>
        <div>
          {hotelTest.map((item,index)=>(
            <SearchComponent data={item} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default SearchPage
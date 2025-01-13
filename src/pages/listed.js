import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Listed = () => {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <h1>Listing Page</h1>
      <div className='Card'>
        <img src="https://via.placeholder.com/150" alt="House" />
        <h3>House Name:</h3>
        <h3>Rent:</h3>
        <h3>Rating:</h3>
      </div>
      <div className='Card'>
        <img src="https://via.placeholder.com/150" alt="House" />
        <h3>House Name:</h3>
        <h3>Rent:</h3>
        <h3>Rating:</h3>
      </div>
      <div className='Card'>
        <img src="https://via.placeholder.com/150" alt="House" />
        <h3>House Name:</h3>
        <h3>Rent:</h3>
        <h3>Rating:</h3>
      </div>
      <Footer/>
    </div>
  )
}

export default Listed
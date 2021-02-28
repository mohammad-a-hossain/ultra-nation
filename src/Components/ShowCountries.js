import React from 'react'
import './country.css'

const ShowCountries = (props) => {
  const addCountryHandler =props.addBtn
    //console.log(props.countries)
   const {flag,name,capital,region} = props.countries
 
  // console.log(props)
    return (
          <div className='detailsCountries'> 
                       
                       
                     <img src={flag}/>
                      <h4>name: {name}</h4>
                       <h4>capital: {capital}</h4> 
                       <p>region:{region}</p>  
                       <button onClick={(countries)=> addCountryHandler(props.countries)} type="button">Add Country</button>
                  </div> 
    )
}
export default ShowCountries
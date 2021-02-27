import React from 'react'
import './country.css'

const ShowCountries = (props) => {

    //console.log(props.countries)
   const {flag,name,capital,region} = props.countries
    return (
          <div className='detailsCountries'> 
                        
                       
                     <img src={flag}/>
                      <h4>name: {name}</h4>
                       <h4>capital: {capital}</h4> 
              
                       <p>region:{region}</p>  
                       
                  </div> 
    )
}
export default ShowCountries
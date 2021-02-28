import React from 'react'
import {useState, useEffect} from 'react'
import './country.css'
import Information from './info/Information'
import ShowCountries from './ShowCountries'


const Countries = () => {

    const [countries,setCountries] =  useState([])
    const [selectCountry,setSelectCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
         .then(res => res.json())
         .then(data => {setCountries(data)})
        
         .catch(error => console.log(error))
     
    }, [])
     //console.log(countries)
     const addCountryHandler=(countries)=>{
      /* console.log('added',countries) */
      const newSelectCountry= [...selectCountry,countries]
      setSelectCountry(newSelectCountry)
    }
    return (
        <div> <Information info={selectCountry}></Information>     
              <h1>Finding Countries{countries.length}</h1>
              <h2>country Selected:{selectCountry.length}</h2>
                {
                 countries.map(ctry =><ShowCountries countries={ctry} addBtn={addCountryHandler} key={ctry.alpha3Code} />) 
                }
           
        </div>
    )
}
export default Countries


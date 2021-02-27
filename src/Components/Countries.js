import React from 'react'
import {useState, useEffect} from 'react'
import './country.css'
import ShowCountries from './ShowCountries'


const Countries = () => {

    const [countries,setCountries] =  useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
         .then(res => res.json())
         .then(data => {setCountries(data)})
        
         .catch(error => console.log(error))
     
    }, [])
     //console.log(countries)
     
    return (
        <div>        
                {
                 countries.map(ctry =><ShowCountries countries={ctry} key={ctry.alpha3Code} />) 
                }
           
        </div>
    )
}
export default Countries


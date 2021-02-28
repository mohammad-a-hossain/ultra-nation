import React from 'react'

 const Information = (props) => {
     const item = props.info
    console.log(item)
    /* let totalPopulation =0
    item.forEach(populaion => {
        totalPopulation= totalPopulation + populaion.population
    }); */
   const totalPopulation= item.reduce((total,item)=> total +item.population,0)
    return (
        <div>
            <p>information{item.length}</p> <p>total population {totalPopulation}</p>
        </div>
    )
}
export default Information
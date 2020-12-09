import React from 'react'
import { FilterField, FilterText } from './style'


const Filter = (props) => {
    
    const categories = props.allRestaurants && props.allRestaurants.restaurants.map((item) => { return item.category })

    const filterCategory = categories && categories.filter((category, i) => {
        return categories.indexOf(category) === i
    })

    const handleCategory = (category) => {
        const filteredArray = props.allRestaurants.restaurants.filter((item) => {
            return item.category.toLowerCase().includes(category.toLowerCase())
        })
        props.setCategory(filteredArray)
    }

    return (
        <FilterField>
            <FilterText>
                {filterCategory && filterCategory.map((item) => {
                    return <p onClick={() => { handleCategory(item) }}>{item}</p>
                })}
            </FilterText>
        </FilterField>
    )
}

export default Filter
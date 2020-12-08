import React from 'react'
import {FilterField, FilterText} from './style'

const Filter = () => {
    return(
        <FilterField>
            <FilterText>
                <p>Hamburger</p>
                <p>Árabe</p>
                <p>Asiática</p>
                <p>Italiana</p>
                <p>Sorvetes</p>
                <p>Carnes</p>
            </FilterText>
            
        </FilterField>
    )
}

export default Filter
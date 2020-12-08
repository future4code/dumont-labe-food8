import React from 'react'
import { IconSearch, Search, SearchForm } from './styles'
import SearchIcon from '../../assets/img/search.svg'

const SearchField = () =>{
    return (
        <Search>
            <IconSearch src={SearchIcon} alt="Buscar" />
            <SearchForm
                placeholder="Restaurante"
            />
        </Search>
    )
}

export default SearchField
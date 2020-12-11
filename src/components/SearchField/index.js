import React, { useState } from 'react'
import { Search, Form } from './styles'
import { InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const SearchField = (props) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = event => {
    setSearchTerm(event.target.value)
    filterByText()
  }

  const filterByText = () => {
    const filteredArray = props.allRestaurants.restaurants.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    if (filteredArray.length === 0) {
      props.setSearch([{id: 'notFound'}])
    } else {
      props.setSearch(filteredArray)
    }    
  }

  return (
    <Search>
        <TextField
          variant="outlined"
          size="medium"
          value={searchTerm}
          type="text"
          name="restaurant"
          placeholder="Restaurante"
          onChange={handleChange}
          required
          style={{ margin: '8px 0 0 0', width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
    </Search>
  )
}

export default SearchField
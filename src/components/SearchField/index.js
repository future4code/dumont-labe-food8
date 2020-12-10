import React, { useState } from 'react'
import { Search } from './styles'
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
    props.setSearch(filteredArray)
  }

  return (
    <Search>
      <form>
        <TextField
          variant="outlined"
          size="small"
          value={searchTerm}
          type="text"
          name="restaurant"
          placeholder="Restaurante"
          onChange={handleChange}
          required
          style={{ margin: '8px 0' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </form>
    </Search>
  )
}

export default SearchField
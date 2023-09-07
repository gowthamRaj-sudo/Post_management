import { IconButton, TextField } from '@mui/material'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchComponent = ({value,onChange}) => {
  return (
    <div>
    <TextField  type='text' size='small'  style={{ backgroundColor: 'white',borderRadius:"18px" }} placeholder='Search the Post' value={value} onChange={(e)=>onChange(e.target.value)}
    InputProps={{
        endAdornment: (
          <IconButton>
            <AiOutlineSearch /> {/* Replace with your desired icon */}
          </IconButton>
        ),
        style: { backgroundColor: 'white' }, // Apply input styles
      }}
    />
    </div>
  )
}

export default SearchComponent

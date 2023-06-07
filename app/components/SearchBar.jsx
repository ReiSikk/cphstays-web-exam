
import * as React from 'react';
import TextField from '@mui/material/TextField';

function SearchBar(props) {
  return (
    <TextField id="outlined-search" label="Search here" type="search" onKeyUp={props.searchChanged}  />
  )
}

export default SearchBar
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (

      <TextField id="outlined-basic" label="Outlined" variant="outlined" sw={{
        width: '25ch',
        color: 'hotpink',
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            color: 'red',
          },
      }}/>

  );
}
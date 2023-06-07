import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


export default function SelectSize(props) {

    return (
<div>
    <FormControl sx={{ m: 1 }}>
       <InputLabel htmlFor="outlined-adornment-amount">Min size</InputLabel>
       <OutlinedInput
        id="outlined-adornment-amount"
        endAdornment={<InputAdornment position="end">m2</InputAdornment>}
        label="Size"
        placeholder='Enter size'
        onChange={props.sizeChanged} 
        />
     </FormControl>
</div>
    )
}

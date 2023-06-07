import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLocation(props) {


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="location-select-autowidth-label">Location</InputLabel>
        <Select
          labelId="location"
          id="location-select-autowidth"
          value={props.location}
          onChange={props.locationChanged}
          autoWidth
          label="Location"
        >
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Østerbro">Østerbro</MenuItem>
          <MenuItem value="Nørrebro">Nørrebro</MenuItem>
          <MenuItem value="Vesterbro">Vesterbro</MenuItem>
          <MenuItem value="Indre By">Indre By</MenuItem>
          <MenuItem value="Amager">Amager</MenuItem>
          <MenuItem value="Valby">Valby</MenuItem>
          <MenuItem value="Nordvest">Nordvest</MenuItem>
          <MenuItem value="Bispebjerg">Bispebjerg</MenuItem>
          <MenuItem value="Vanløse">Vanløse</MenuItem>
          <MenuItem value="Brønshøj-Husum">Brønshøj-Husum</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
// import IconButton from '@material-ui/core/IconButton';

// import {
//     IconFlagTR,
//     IconFlagDE,
//     IconFlagUS
// } from 'material-ui-flags';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CountrySelect() {
  
  return (
    <FormControl sx={{ m: 2, minWidth: 235 }} size="small">
    <InputLabel id="demo-select-small">Country</InputLabel>
    <Select
      labelId="country"
      id="country"
      // value={Country}
      defaultValue={30}
      label="Country"

    >
      <MenuItem value="30">
        {/* <em>None</em> */}
      </MenuItem>
      {/* <MenuItem value={10}>SP</MenuItem>
      <MenuItem value={20}>BR</MenuItem> */}
      <MenuItem value={30}>FRANCE </MenuItem>
      <MenuItem value={40}>SPAIN(*inactive) </MenuItem>
    </Select>
  </FormControl>
    // <Box sx={{ minWidth: 120, height: '80%', marginTop:2.5 }}>
    //   <FormControl fullWidth>
    //     <InputLabel sx={{ minWidth: 120, height: '80%' }} >
    //       Country
    //     </InputLabel>
    //     <NativeSelect
    //       defaultValue={30}
    //       inputProps={{
    //         name: 'age',
    //         id: 'uncontrolled-native',
    //       }}
    //     >
    //       <option value={10}>BRAZIL</option>
    //       <option value={20}>SPAIN</option>
    //       <option value={30}>FR</option>
    //     </NativeSelect>
    //   </FormControl>
    // </Box>
  );
}
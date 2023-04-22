
import React, {useEffect, useState} from 'react'
// import { useContext } from "react";
import {  tokens } from "../../theme";
import { Box, useTheme, Typography, Grid, Tooltip } from "@mui/material";

import { DataGrid , GridToolbar} from '@mui/x-data-grid';


import Alert from '@mui/material/Alert';

const addId=(arr)=> {
  return arr.map((obj, index)=>  {
    return ({...obj,id: index })
  });
};

function DataGridRev(props) {

    let drev = props.drev

    let datarev = addId(drev)




    const userTableStyles = {
        // m: 2,
        // marginTop: 2,
        // height: '370px',
        height: '450px',
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 2,
        border: 2,
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
    }

    const columns = [
        { field: 'id', headerName: 'Id', width: 30 },
        { field: 'Date de cloture exercice 2020', headerName: 'Date de cloture exercice 2020', width: 300 },
        { field: 'Date de cloture exercice 2019', headerName: 'Date de cloture exercice 2019', width: 150 },


      ];


  if (!datarev) return null;
  return (
    <Box display="grid" marginTop={3}>
        <DataGrid
            rows = {datarev}
            columns = {columns}
        //   loading = {!allinseerecs.length}
            sx = {userTableStyles}
            components={{ Toolbar: GridToolbar }}
            />  
    </Box>
  )
}

export default DataGridRev

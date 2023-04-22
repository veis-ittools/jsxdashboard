
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

    const datarev = props.datarev

    console.log('from datagrid', datarev);
    console.log('type', typeof(datarev));



    const userTableStyles = {
        // m: 2,
        // marginTop: 2,
        // height: '370px',
        height: '200px',
        width:900 ,
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
        { field: 'id', headerName: 'id', width: 30 },
        { field: 'CA2020',  headerName: 'CA2020', width: 100 },
        { field: 'Date de cloture exercice 2020', headerName: 'Date de cloture exercice 2020', width: 175 },
        { field: 'CA2019',  headerName: 'CA2019', width: 100 },
        { field: 'Date de cloture exercice 2019', headerName: 'Date de cloture exercice 2019', width: 175 },
        { field: 'CA2018',  headerName: 'CA2018', width: 100 },
        { field: 'Date de cloture exercice 2018', headerName: 'Date de cloture exercice 2018', width: 175 },
        { field: 'CA2017',  headerName: 'CA2017', width: 100 },
        { field: 'Date de cloture exercice 2017', headerName: 'Date de cloture exercice 2017', width: 175 },
        { field: 'CA2016',  headerName: 'CA2016', width: 100 },
        { field: 'Date de cloture exercice 2016', headerName: 'Date de cloture exercice 2016', width: 175 },
              

      ];
    let inseeid = addId(datarev)

  // if (!drev) return null;
  return (
    <Box display="grid" marginTop={3}>


      <Alert  severity="info">Revenue Report</Alert>

      { inseeid !== undefined ? 
        <DataGrid
            rows = {inseeid}
            columns = {columns}
        //   loading = {!allinseerecs.length}
            sx = {userTableStyles}
            components={{ Toolbar: GridToolbar }}
            />  
            : null } 
    </Box>
  )
}

export default DataGridRev

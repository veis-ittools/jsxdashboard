
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
        m: 1,
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
        { field: 'CA2020',  headerName: 'CA 2020', width: 100 },
        { field: 'Date de cloture exercice 2020', headerName: 'Date de cloture exercice 2020', width: 175 },        
        { field: 'CA2019',  headerName: 'CA 2019', width: 100 },
        { field: 'Date de cloture exercice 2019', headerName: 'Date de cloture exercice 2019', width: 175 },
        { field: 'CA2018',  headerName: 'CA 2018', width: 100 },
        { field: 'Date de cloture exercice 2018', headerName: 'Date de cloture exercice 2018', width: 175 },
        { field: 'CA2017',  headerName: 'CA 2017', width: 100 },
        { field: 'Date de cloture exercice 2017', headerName: 'Date de cloture exercice 2017', width: 175 },
        { field: 'CA2016',  headerName: 'CA 2016', width: 100 },
        { field: 'Date de cloture exercice 2016', headerName: 'Date de cloture exercice 2016', width: 175 },
        { field: 'Résultat2020',  headerName: 'Résultat 2020', width: 100 },
        { field: 'Résultat2019', headerName: 'Résultat 2019', width: 100 },
        { field: 'Résultat2018',  headerName: 'Résultat 2018', width: 100 },
        { field: 'Résultat 2', headerName: 'Résultat 2017', width: 100 },
        { field: 'Résultat 3', headerName: 'Résultat 2016', width: 100 },
        { field: 'Effectif2020', headerName: 'Effectif 2020', width: 100 },
        { field: 'Effectif2019', headerName: 'Effectif 2019', width: 100 },
        { field: 'Effectif2018', headerName: 'Effectif 2018', width: 100 },
        { field: 'Effectif2017', headerName: 'Effectif 2017', width: 100 },
        { field: 'Effectif2016', headerName: 'Effectif 2016', width: 100 },
                     

      ];
    let inseeid = addId(datarev)

  // if (!drev) return null;
  return (
    <Box>
    <Alert  severity="info">Revenue Report </Alert>
    <Box marginTop={3}  display="flex" justifyContent="center" alignItems="center" >


      

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
    </Box>
  )
}

export default DataGridRev

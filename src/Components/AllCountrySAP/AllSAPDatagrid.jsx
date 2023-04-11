import React, {useEffect, useState} from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, useTheme, Typography, Grid } from "@mui/material";
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import axios from "axios";
import Alert from '@mui/material/Alert';


const addId=(arr)=> {
    return arr.map((obj, index)=>  {
      return ({...obj,id: index })
    });
  };


function AllSAPDatagrid(props) {
    const theme = useTheme();

    const apiparams2 = props.apiparams

    console.log('datagrid called apiparams---', apiparams2)

    // const [apirams, setApiparams] = useState()
    // setApiparams(apiparams2)

    const fam1 = apiparams2.famiile1
    // let famiile2 = apirams.famiile2
    // let country =  apirams.country
    // console.log('datagrid called apiparams', apirams)
    console.log('datagrid called famiile1', apiparams2.famille1)
    console.log('datagrid called saved var', fam1)
    
    const userTableStyles = {
        // m: 2,
        marginTop: 4,
        height: '450px',
        width: 900,
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
        { field: 'Nom Fournisseur', headerName: 'Name', width: 300 },
        { field: 'Ville Fournisseur', headerName: 'City', width: 135 },
        { field: 'Adresse Fournisseur Ligne 1', headerName: 'Address', width: 150 },   
        { field: 'country', headerName: 'country', width: 75 },
          { feild: 'Link', headerName:'Link', width:200 , 
          renderCell: (params) => 
          <a  href={params.row.link} target={"_blank" } rel={"noreferrer"} >{params.row.link} </a>,
      },

      ];

     let urlchangeallrecs =  `https://veis-ittools.com:9100/SAP/BI/ALL/${ apiparams2.famille1}/fammile2/${apiparams2.famiile2}/country/${apiparams2.country}`

     const encoded = encodeURI(urlchangeallrecs)
     console.log( urlchangeallrecs)
    

      
      const [allusers, setUsers] = useState([])
      const [allinseerecs, setInseerecs] = useState([])
  
      useEffect(() => {
        fetchData();
      }, [encoded]);
    
      const fetchData = () => {
        // setApiurl(apiurltocall[0])
        console.log('INSEE API CODE -----')
        axios.post(encoded).then((response) => {
            setUsers(response.data);
            setInseerecs(response.data.SAPALL)
            console.log('APIRESPONSE ===', response.data)
            console.log(typeof((response.data.SAPALL)))
            console.log(typeof(allinseerecs));
            console.log('here from now');
        })
      }
      let inseeid = addId(allinseerecs)

  if (!allusers) return null;
  return (
    <Box display="grid" marginTop={3}>
      
      <Alert  severity="info">All Etablishments</Alert>
      <Box display="flex" justifyContent="center" alignItems="center"  >
      
        <DataGrid
              rows = {inseeid}
              columns = {columns}
            //   loading = {!allinseerecs.length}
              sx = {userTableStyles}
              components={{ Toolbar: GridToolbar }}
              />  
      </Box>
    </Box> 
  )
}

export default AllSAPDatagrid

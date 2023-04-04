
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

function AllEstablish(props) {
    let siren = props.siren


    console.log('from all es new comp', siren)

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

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
        { field: 'Name', headerName: 'Name', width: 300 },
        { field: 'SIREN', headerName: 'SIREN', width: 100 },
        { field: 'SIRET', headerName: 'SIRET', width: 120 },
        { field: 'commune', headerName: 'City', width: 135 },
        { field: 'Département', headerName: 'Département', width: 120 },
        { field: 'Région', headerName: 'Région', width: 120 },
        { field: 'Address', headerName: 'Address', width: 150 },
        
        { field: 'Category', headerName: 'Category', width: 75 },
        { field: 'NAF', headerName: 'NAF', width: 75 },
        { field: 'ESS', headerName: 'ESS', width: 25 },
        { field: 'Code Postal', headerName: 'Code Postal', width: 75 },
        { feild: 'link', headerName:'Link', width:200 , 
          renderCell: (params) => 
          <a  href={params.row.link} target={"_blank" } rel={"noreferrer"} >{params.row.link} </a>,
      },
    //   {
    //     field: "action",
    //     headerName: "Action",
    //     sortable: false,
    //     renderCell: ({ row }) =>
    //       <Button 
    //       type="submit"
    //       size='small'
    //       variant="contained">
    //         Action  
    //       </Button>,
    //   }      


      ];

    // BASIC INFORMATION API CALL CODE START------
    let urlchangeallrecs = `https://veis-ittools.com:9100/FR/dashboard/data/${siren}`
    console.log(urlchangeallrecs);
    // let urlchange = 'https://veis-ittools.com:9100/FR/dashboard/data/%20%20535297121'

    
    const [allusers, setUsers] = useState([])
    const [allinseerecs, setInseerecs] = useState([])

    useEffect(() => {
      fetchData();
    }, [urlchangeallrecs]);
  
    const fetchData = () => {
      // setApiurl(apiurltocall[0])
      console.log('INSEE API CODE -----')
      axios.post(urlchangeallrecs).then((response) => {
          setUsers(response.data);
          setInseerecs(response.data.AllEtablishments)
          console.log(response.data.AllEtablishments)
          console.log(typeof((response.data.AllEtablishments)))
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
              loading = {!allinseerecs.length}
              sx = {userTableStyles}
              components={{ Toolbar: GridToolbar }}
              />  
      </Box>
    </Box> 
  )
}

export default AllEstablish
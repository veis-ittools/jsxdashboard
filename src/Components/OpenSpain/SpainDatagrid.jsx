import React, {useEffect, useState} from 'react'
import axios from "axios";
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import { Box, Button ,TextField, useTheme } from "@mui/material";
import Alert from '@mui/material/Alert';


const addId=(arr)=> {
    return arr.map((obj, index)=>  {
      return ({...obj,id: index })
    });
  };


function SpainDatagrid(props) {
    let domain = props.domain
    let URL = `https://veis-ittools.com:5900/OPENDATA/spain/${domain}`

    const [users, setUsers] = useState([])
    const [spainrecs, setSpainrecs] = useState([])
    // const [allspainrecs, setSpainrecs] = useState([])
    const [spainflag, setSpainflag] = useState(false)
    const [totalrecs, setTotalrecs] = useState()

    const userTableStyles = {
        m: 2,
        marginTop: 2,
        // height: '370px',
        height: '450px',
        width: 800,
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
        { field: 'name', headerName: 'EMPRESA', width: 275 },
        { field: 'ACTIVIDAD', headerName: 'ACTIVIDAD', width: 175 },
        { field: 'DIRECCION', headerName: 'DIRECCION', width: 215 },   
        { field: 'POBLACION', headerName: 'POBLACION', width: 120 },
        { field: 'PROVINCIA', headerName: 'PROVINCIA', width: 120 },
        { field: 'COMUNIDAD', headerName: 'COMUNIDAD', width: 120 },
        { feild: 'googlelink', headerName:'Link', width:250 , 
          renderCell: (params) => 
          <a  href={params.row.googlelink} target={"_blank" } rel={"noreferrer"} >{params.row.googlelink} </a>,
      },

      ];
    useEffect(() => {
        fetchData();
      }, [URL]);
    
    const fetchData = () => {
    // setApiurl(apiurltocall[0])
    console.log('SPAIN API CODE -----')
    axios.post(URL).then((response) => {
        setUsers(response.data);
        setSpainrecs(response.data.CompaniesSpain)
        setTotalrecs(response.data.Totalrecords)
        setSpainflag(true)
        // console.log(response.data.CompaniesSpain)
        // console.log('here from now')
    })
    }

    let spainid = addId(spainrecs)

if (!users) return null;

if (spainrecs!== [] && spainflag === true) {
    return (
  
      <Box m="20px">
        <Alert  severity="info"> {totalrecs} Etablishments</Alert>
          <Box display="flex" justifyContent="center" alignItems="center"  >
   
          {totalrecs !== 0 ? 
            <DataGrid
                rows = {spainid}
                columns = {columns}
                loading = {!spainid.length}
                sx = {userTableStyles}
                components={{ Toolbar: GridToolbar }}
                />  
            : null}
          </Box>
  
          </Box>
  
      
    );
  }
  return null ;
  
}


export default SpainDatagrid

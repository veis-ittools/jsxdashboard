import React, {useEffect, useState} from 'react'
import axios from "axios";
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import { Box, Button ,TextField, useTheme } from "@mui/material";


function RgeDatagrid(props) {
    let meta = props.meta
    let domain = props.domain

    let URL = `https://veis-ittools.com:9100/RGE/${meta}/domain/${domain}`

    const [users, setUsers] = useState([])
    const [rgerecs, setRGErecs] = useState([])
    const [rgeflag, setRGEflag] = useState(false)

    const userTableStyles = {
        // m: 2,
        // marginTop: 2,
        // height: '370px',
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
        { field: 'nom_entreprise', headerName: 'Name', width: 250 },
        { field: 'siret', headerName: 'SIRET', width: 125 },
        { field: 'nom_certificat', headerName: 'Nom_Certificat', width: 135 },
        { field: 'nom_qualification', headerName: 'Qualification', width: 250 },
        { feild: 'url_qualification', headerName:'Certificate', width:200 , 
        renderCell: (params) => 
        <a   href={params.row.url_qualification} target={"_blank" } rel={"noreferrer"} >{params.row.url_qualification} </a>,
        },
        { field: 'organisme', headerName: 'Organisme', width: 120 },
        { field: 'commune', headerName: 'City', width: 120 },
        
        { field: 'meta_domaine', headerName: 'MetaDomain', width: 120 },
        { field: 'domaine', headerName: 'Domaine', width: 120 },
        { field: 'telephone', headerName: 'Telephone', width: 125 },
        { field: 'email', headerName: 'Email', width: 200 },
        // {
        //   field: "action",
        //   headerName: "Action",
        //   sortable: false,
        //   renderCell: ({ row }) =>
        //     <Button 
        //     type="submit"
        //     size='small'
        //     variant="contained">
        //       Action  
        //     </Button>
        // }, 

        // {
        // field: "action",
        // headerName: "Action",
        // sortable: false,
        // renderCell: ({ row }) =>
        //   <Button 
        //   type="submit"
        //   size='small'
        //   variant="contained"
        //   onClick={()=>{    
        //     console.log('Action Clicked');
        //     // console.log(params.row.siret)
        //   }}>
        //     Action  
        //   </Button>,
        // } ,
      
      {
          field: "action",
          headerName: "Action",
          sortable: false,
          renderCell: (params) => {
            const handleClick = () => {
              console.log(params.row.siret);
            };
            return <button
                    type="submit"
                    size='small'
                    variant="contained" 
                    onClick={handleClick}>
                    Action</button>;
        },
      }
    ]
    
    
    
    useEffect(() => {
        fetchData();
      }, [URL]);
    
    const fetchData = () => {
    // setApiurl(apiurltocall[0])
    console.log('API CODE -----')
    axios.post(URL).then((response) => {
        setUsers(response.data);
        setRGErecs(response.data.RGE)
        setRGEflag(true)
        // console.log(response.data.RGE)
        // console.log('here from now')
    })
    }




if (!users) return null;
  


if (rgerecs!== [] && rgeflag === true) {
    return (
  
      <Box m="20px">
          <Box display="flex" justifyContent="center" alignItems="center"  >
  
          <DataGrid 
            rows = {rgerecs}
            columns = {columns}
            loading = {!rgerecs.length}
            sx = {userTableStyles}
            components={{ Toolbar: GridToolbar }}
            // getRowId={(rows) =>  generateRandom()}  
            /> 
          </Box>
  
          </Box>
  
      
    );
  }
  return null ;
  
  }
  

export default RgeDatagrid

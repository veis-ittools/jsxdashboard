import React, {useEffect, useState} from 'react'
import { Box } from "@mui/material";
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import axios from "axios";
import Alert from '@mui/material/Alert';


const addId=(arr)=> {
    return arr.map((obj, index)=>  {
      return ({...obj,id: index })
    });
  };


function AllSAPDatagrid(props) {
    // const theme = useTheme();

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
        { field: 'Nom Fournisseur', headerName: 'Name', width: 300 },
        { field: 'Ville Fournisseur', headerName: 'City', width: 150 },
        { field: 'Adresse Fournisseur Ligne 1', headerName: 'Address', width: 275 },   
        { field: 'country', headerName: 'country', width: 120 },
        { feild: 'googlelink', headerName:'Link', width:250 , 
          renderCell: (params) => 
          <a  href={params.row.googlelink} target={"_blank" } rel={"noreferrer"} >{params.row.googlelink} </a>,
      },

      ];

    //  let urlchangeallrecs =  `https://veis-ittools.com:9100/SAP/BI/ALL/${ apiparams2.famille1}/fammile2/${apiparams2.famiile2}/country/${apiparams2.country}`
     let urlchangeallrecs = 'https://veis-ittools.com:5900/SAP/BI/ALL/fammile2/country/'
     let headers = {
        'accept': 'application/json',
        'fammile2' : apiparams2.famiile2,
        'country' : apiparams2.country

     }

     console.log(urlchangeallrecs)
     console.log(headers)
     
     const encoded = encodeURI(urlchangeallrecs)
     console.log( urlchangeallrecs)
    

      
      const [allusers, setUsers] = useState([])
      const [allinseerecs, setInseerecs] = useState([])
      const [totalrecs, setTotalrecs] = useState()
  
    //   useEffect(() => {
    //     axios.post(urlchangeallrecs, {}, {headers}).then((response) => {
    //         setUsers(response.data);
    //         setInseerecs(response.data.SAPALL)

    //         console.log(response.data)
    //     });
    //   }, [urlchangeallrecs]);
      
      
      useEffect(() => {
        fetchData();
      }, [encoded]);
    
      const fetchData = () => {
        // setApiurl(apiurltocall[0])
        console.log('INSEE API CODE -----')
        axios.post(encoded, {}, {headers}).then((response) => {
            setUsers(response.data);
            setInseerecs(response.data.SAPALL)
            setTotalrecs(response.data.Totalrecords)
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
      
      <Alert  severity="info"> {totalrecs} Etablishments</Alert>
      <Box display="flex" justifyContent="center" alignItems="center"  >
      

      {totalrecs !== 0 ? 
        <DataGrid
              rows = {inseeid}
              columns = {columns}
            //   loading = {!allinseerecs.length}
              sx = {userTableStyles}
              components={{ Toolbar: GridToolbar }}
              />  
      : null}
      </Box>
    </Box> 
  )
}

export default AllSAPDatagrid

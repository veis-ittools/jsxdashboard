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

    const famiile1 = apiparams2.famiile1
    let famiile2 = apiparams2.famiile2
    let country = apiparams2.country
    // let country =  apirams.country
    // console.log('datagrid called apiparams', apirams)
    console.log('datagrid called famiile1', apiparams2.famille2)
    console.log('datagrid called saved var', famiile2)
    
    let codefam1 = famiile1.slice(-6)
    let tempfam2 = famiile2.slice(-8)
    let codefam2 = tempfam2.slice(0,6)

    console.log('codefam2---', codefam2)
    let codecorrect = null

    const codeflagset = (codefam1, codefam2) => {
      if (codefam1===codefam2){
        return codecorrect = true
      }return codecorrect = false
      
    }

    let flagtocall = codeflagset(codefam1, codefam2)

    console.log('flagtocall---', flagtocall)
    const userTableStyles = {
        m: 2,
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
        // { field: 'country', headerName: 'country', width: 120 },
        { feild: 'googlelink', headerName:'Link', width:250 , 
          renderCell: (params) => 
          <a  href={params.row.googlelink} target={"_blank" } rel={"noreferrer"} >{params.row.googlelink} </a>,
      },

      ];

    //  let urlchangeallrecs =  `https://navik.veis-ittools.fr:9100/SAP/BI/ALL/${ apiparams2.famille1}/fammile2/${apiparams2.famiile2}/country/${apiparams2.country}`
    // let urlchangeallrecs =  `https://veis-ittools.eu/SAP/BI/ALL/fammile2/${famiile2}/country/${country} `
    

    // let urlchangeallrecs = 'https://veis-ittools.eu/SAP/BI/ALL/fammile2/CABOS%20ESPECIAIS%20OU%20OUTROS%20%7C%20AACABL23/country/SPAIN'
    
    // lts code block
    let urlchangeallrecs = `https://veis-ittools.eu/SAP/BI/ALL/fammile2/${famiile2}/country/${country}`
    console.log('url--',urlchangeallrecs )
    // lts code block


     console.log(urlchangeallrecs)
    //  console.log(headers)
     
     const encoded = encodeURI(urlchangeallrecs)
     console.log( 'encoded---', encoded)
    

      
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
        axios.post(encoded).then((response) => {
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


  if (allusers !== [] && flagtocall === true) {
    return (
      <Box display="grid" marginTop={3}>
        
        <Alert  severity="info"> {totalrecs} Etablishments found in SAP </Alert>
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

  } return  <Alert  sx={{width:'85%' }} severity="error"> Selected Achat Famille 1 and Achat Famille 2 are Different. Plase check Famille1/Famille2 feilds</Alert> ;
}
export default AllSAPDatagrid

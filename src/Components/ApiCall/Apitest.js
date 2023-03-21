import React, {useEffect, useState} from 'react'
import axios from "axios";
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
// import Button from '@mui/material/Button';
import { Box } from '@mui/system';

function Apitest(props) {

    let apiurllist =[]




    let apiparams2 = props.apiparams2

    console.log('testapi block----', apiparams2)
    console.log('Flag--->', apiparams2.iscomplete)

    // let [apiurl, setApiurl] = useState()

    // if (apiparams2.iscomplete === true){
    let naf = apiparams2.naf
    let naftocall =  naf.slice(0, 6)

    let datasource = apiparams2.datasource
    let category = apiparams2.companysize
    let ESS = apiparams2.ESS
    let location = apiparams2.location

    console.log(location)
    console.log(location.toString().length )
    let regionlen  = location.toString().length
    console.log(naftocall)
    console.log(datasource)

    let apiurltocall = urlformating(ESS, location,category, datasource, regionlen, naftocall, naf)
    console.log('function output', apiurltocall)

    apiurllist.push(apiurltocall[0])

    // setApiurl(apiurltocall[0])
    // }
    let urlchange = apiurllist[0] 
    
    const userTableStyles = {
        // m: 2,
        // marginTop: 2,
        height: '450px',
        width: 900,
        // display: 'flex',
        // flexDirection: 'column',
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
        
    const [users, setUsers] = useState([])
    const [inseerecs, setInseerecs] = useState([])
 
    

    
    // useEffect(() => {

    //     setApiurl(apiurltocall[0])
        
    //     console.log('API CODE -----')
    //     axios.post(apiurl).then((response) => {
    //         setUsers(response.data);
    //         // setInseerecs(response.data.INSEE)
    //         setInseerecs(response.data.BI)
    //         // if (datasource==='BI'){
    //         //     setInseerecs(response.data.BI)
    //         // }setInseerecs(response.data.INSEE)
            
    //         setIdadd(true)
    //         console.log(response.data)
    //         console.log('here from now')
    //     });
    // }, [apiurllist ]);

    useEffect(() => {
        fetchData();
      }, [urlchange]);
    
      const fetchData = () => {
        // setApiurl(apiurltocall[0])
        console.log('INSEE API CODE -----')
        axios.post(urlchange).then((response) => {
            setUsers(response.data);
            setInseerecs(response.data.INSEE)
            console.log(response.data)
            console.log('here from now')
      })
    }


  if (!users) return null;
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="center" alignItems="center"  >
        <DataGrid
              rows = {inseerecs}
              columns = {columns}
              loading = {!inseerecs.length}
              sx = {userTableStyles}
              components={{ Toolbar: GridToolbar }}
              />  
      </Box>
    </Box> 

  )
}

export default Apitest


const urlformating = (ESS, location,category, datasource, regionlen, naftocall, naf) => {

    console.log('INSEE FUNCTION CODE BLOCK CALLED!')

    let finalbaseURL = []

    if ( ESS !== 'YES' && category ==='ALL' && regionlen < 1 ) {
        console.log('insee block')
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/All?ESS=false`
        console.log('scene 1')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }
    if ( ESS === 'YES' && category ==='ALL'  && regionlen < 1 ) {
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/All?ESS=true`
        console.log('scene 2')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }


    if (ESS !== 'YES' && category !== 'ALL'  && regionlen < 1){
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/${category}?ESS=false`
        console.log('scene 3')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }

    if (ESS === 'YES' && category !== 'ALL'  && regionlen < 1){
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/${category}?ESS=true`
        console.log('scene 4')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }
// region figures
    if ( ESS !== 'YES' && category ==='ALL' && regionlen > 1 ) {
        console.log('insee block')
        let naftocall =  naf.slice(0, 6)
        console.log(naftocall)
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/All?region=${location}&ESS=false`
        console.log('scene 5')
        finalbaseURL.push(baseURL)


    }
    if ( ESS === 'YES' && category ==='ALL'  && regionlen > 1 ) {
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/All?region=${location}&ESS=true`
        console.log('scene 6')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)
 
    }


    if (ESS !== 'YES' && category !== 'ALL'  && regionlen > 1){
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/${category}?region=${location}&ESS=false`
        console.log('scene 7')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }

    if (ESS === 'YES' && category !== 'ALL'  && regionlen > 1){
        let baseURL = `https://veis-ittools.com:5900/${datasource}/${naftocall}/category/${category}?region=${location}&ESS=true`
        console.log('scene 8')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }
    return finalbaseURL
} 

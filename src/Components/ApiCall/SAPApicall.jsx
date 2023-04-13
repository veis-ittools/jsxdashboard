import React, {useEffect, useState} from 'react'
import axios from "axios";
// import Datagrid from './Datagrid';
// import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import { Box } from '@mui/system';
import BasicInfo from '../BasicInfo/BasicInfo';
import RevenueStats from '../BasicInfo/RevenueStats';
import AllEstablish from '../BasicInfo/AllEstablish';
import ExampleComp from '../BasicInfo/ExampleComp';

function SAPApicall(props) {
    let apiurllist =[]
    let apiparams2 = props.apiparams2
    let famille2 = apiparams2.famille2
    let datasource = apiparams2.datasource
    let category = apiparams2.companysize
    let ESS = apiparams2.ESS
    let location = apiparams2.location

    console.log(location)
    console.log(location.toString().length )
    let regionlen  = location.toString().length
    console.log(datasource)

    console.log('SAP BI block----', apiparams2)

    let apiurltocall = sapurlformating(famille2, ESS, location,category, regionlen)
    console.log('SAP ---- BI function output', apiurltocall)

    apiurllist.push(apiurltocall[0])
    let urlchange = apiurllist[0]

    console.log('urltocall---', urlchange)

    const encoded_url = encodeURI(urlchange)

    console.log('urltocall encoded_url---',encoded_url )

    let url ='https://veis-ittools.com:5900/SAP/BI/RACCORDS%20COSSES%20MANCHONS%20ET%20CONNECTIQUE%20%7C%20AHELIA12?cat_name=All&ESS=false' 

    console.log('url_url---',url )
    
    
    let headers = {
      'accept': 'application/json',
    }
    
    const [users, setUsers] = useState([])
    const [birecs, setBIrecs] = useState([])
    const [biflag, setBiflag] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null);
    const [totalrecs, setTotalrecs] = useState()
  
    

    const userTableStyles = {
        // m: 2,
        // marginTop: 2,
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



        { field: 'Name', headerName: 'Name', width: 300 },
        { field: 'SIREN', headerName: 'SIREN', width: 100 },
        { field: 'SIRET', headerName: 'SIRET', width: 120 },

        {
          field: 'button',
          headerName: 'Action',
          sortable: false,
          width: 70,
          disableClickEventBubbling: true,
          renderCell: (params) => {
              return (
              <button onClick=
              {
                () => handleButtonClick(params)
              }>More</button>
              );
          },
      },

        { field: 'commune', headerName: 'City', width: 135 },
        // { field: 'Département', headerName: 'Département', width: 120 },
        { field: 'Région', headerName: 'Région', width: 120 },
        { field: 'Address', headerName: 'Address', width: 150 },
        
        { field: 'Category', headerName: 'Category', width: 75 },
        { field: 'NAF', headerName: 'NAF', width: 75 },
        { field: 'ESS', headerName: 'ESS', width: 25 },
        { field: 'Code Postal', headerName: 'Code Postal', width: 75 },
        { feild: 'link', headerName:'Link', width:200 , 
          renderCell: (params) => 
          <a   href={params.row.link} target={"_blank" } rel={"noreferrer"} >{params.row.link} </a>,
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
    const handleButtonClick = (params) => {
        setSelectedRow(params.row.SIRET);
        // setAllrgerows(params.row)
        console.log('sap basic all ROW----', selectedRow);
    };  

 



    useEffect(() => {
        fetchData();
      }, [encoded_url]);
    
      const fetchData = () => {
        // setApiurl(apiurltocall[0])
        console.log('SAP API CODE -----')
        axios.post(encoded_url).then((response) => {
            setUsers(response.data);
            setBIrecs(response.data.SAP)
            setTotalrecs(response.data.Totalrecords)
            setBiflag(true)
            // console.log('here from now', response.data.SAP)
            // console.log('here from now')
      })
    }

if (!users) return null;
if (birecs!== [] && biflag === true) {
    return (
  
      <Box m="20px">
           
           <Alert sx={{width:'85%' }} severity="info"> {totalrecs} Etablishments Found</Alert>
    
          <Box display="flex" justifyContent="center" alignItems="center"  >

          {totalrecs !== 0 ? 
  
          <DataGrid 
            rows = {birecs}
            columns = {columns}
            // loading = {!birecs.length}
            sx = {userTableStyles}
            components={{ Toolbar: GridToolbar }}
            checkboxSelection
            // getRowId={(rows) =>  generateRandom()}  
            /> 
            : null}
          </Box>
          {selectedRow && <BasicInfo siren = {selectedRow}></BasicInfo>}
          {selectedRow && <RevenueStats siren = {selectedRow}></RevenueStats> }
          {selectedRow && <AllEstablish siren = {selectedRow}></AllEstablish>}  
          {selectedRow && <ExampleComp/>}      


  
          </Box>
  
      
    );
  }
  return null ;
  
}

export default SAPApicall


const sapurlformating = (famille2, ESS, location,category, regionlen) => {

    console.log(' *SAP BI* FUNCTION CODE BLOCK CALLED!')
    console.log('famiile----', famille2)

    let finalbaseURL = []

    if ( ESS !== 'YES' && category ==='ALL' && regionlen < 1 ) {
        // console.log('insee block')
        let baseURL = `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=All&ESS=false`
        console.log('scene 1')
        console.log(baseURL)
        finalbaseURL.push(baseURL)

    }
    if ( ESS === 'YES' && category ==='ALL'  && regionlen < 1 ) {
        let baseURL = `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=All&ESS=true`
        console.log('scene 2')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }


    if (ESS !== 'YES' && category !== 'ALL'  && regionlen < 1){
        let baseURL = `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=${category}&ESS=false`
        console.log('scene 3')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }

    if (ESS === 'YES' && category !== 'ALL'  && regionlen < 1){
		let baseURL = `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=${category}&ESS=true`
        console.log('scene 4')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }
// region figures
    if ( ESS !== 'YES' && category ==='ALL' && regionlen > 1 ) {	
		let baseURL =  `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=All&region=${location}&ESS=false`
        console.log('scene 5')
        finalbaseURL.push(baseURL)


    }
    if ( ESS === 'YES' && category ==='ALL'  && regionlen > 1 ) {	
		let baseURL =  `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=All&region=${location}&ESS=true`
        console.log('scene 6')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)
 
    }


    if (ESS !== 'YES' && category !== 'ALL'  && regionlen > 1){	
		let baseURL =  `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=${category}&ESS=false`
        console.log('scene 7')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }

    if (ESS === 'YES' && category !== 'ALL'  && regionlen > 1){		
		let baseURL =  `https://veis-ittools.com:5900/SAP/BI/${famille2}?cat_name=${category}&ESS=true`
        console.log('scene 8')
        // console.log(baseURL)
        finalbaseURL.push(baseURL)

    }
    return finalbaseURL
} 

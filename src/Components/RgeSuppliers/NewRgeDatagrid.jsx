import React, {useEffect, useState} from 'react'
import axios from "axios";
import { DataGrid , GridToolbar} from '@mui/x-data-grid';
import { Box, Button ,TextField, useTheme } from "@mui/material";
// // import MyComponent from './MyComponent';
import ContentRge from './ContentRge';
import BasicInfo from '../BasicInfo/BasicInfo';
import RevenueStats from '../BasicInfo/RevenueStats';
import AllEstablish from '../BasicInfo/AllEstablish';

function NewRgeDatagrid(props) {

    let meta = props.meta
    let domain = props.domain

    let URL = `https://veis-ittools.com:9100/RGE/${meta}/domain/${domain}`

    const [users, setUsers] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);
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
        
        // { feild: 'url_qualification', headerName:'Certificate', width:200 , 
        // renderCell: (params) => 
        // <a   href={params.row.url_qualification} target={"_blank" } rel={"noreferrer"} >{params.row.url_qualification} </a>,
        // },
        
       
        
        { field: 'organisme', headerName: 'Organisme', width: 120 },
        { field: 'commune', headerName: 'City', width: 120 },
        
        { field: 'meta_domaine', headerName: 'MetaDomain', width: 120 },
        { field: 'domaine', headerName: 'Domaine', width: 120 },
        { field: 'telephone', headerName: 'Telephone', width: 125 },
        { field: 'email', headerName: 'Email', width: 200 },
        // { field: 'site_internet', headerName: 'site_internet', width: 250 },
        
        { feild: 'site_internet', headerName:'website', width:200 , 
        renderCell: (params) => 
        <a   href={params.row.site_internet} target={"_blank" } rel={"noreferrer"} >{params.row.site_internet} </a>,
        }, 
        {
            field: 'button',
            headerName: 'Action',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                <button onClick={() => handleButtonClick(params)}>Click Me</button>
                );
            },
        },
        // {
        //     field: "action",
        //     headerName: "Action",
        //     sortable: false,
        //     renderCell: (params) => {
        //         const handleClick = () => {
        //         console.log(params.row.siret);
        //         };
        //         return <button
        //                 type="submit"
        //                 size='small'
        //                 variant="contained" 
        //                 onClick={handleClick}>
        //                 Action</button>;
        //     },
        // }
    ]
    
    const handleButtonClick = (params) => {
        setSelectedRow(params.row.siret);
    };   
    
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
        console.log(response.data.RGE)
        // console.log(response.data)
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
                    checkboxSelection
                // getRowId={(rows) =>  generateRandom()}  
                /> 
            </Box>
            {/* {selectedRow && <ContentRge row={selectedRow} />} */}
            {selectedRow && <BasicInfo siren = {selectedRow}></BasicInfo>}
            {/* {selectedRow && <RevenueStats siren = {selectedRow}></RevenueStats> } */}
            {selectedRow && <AllEstablish siren = {selectedRow}></AllEstablish>}        
    
        </Box>
    
        
    );
    }
    return null ;
    
    }


export default NewRgeDatagrid

// function DataGridPage() {
//   const [rows, setRows] = useState([]);
//   const [selectedRow, setSelectedRow] = useState(null);

//   useEffect(() => {
//     fetch('/api/rows')
//       .then((response) => response.json())
//       .then((data) => setRows(data));
//   }, []);

//   const handleButtonClick = (params) => {
//     setSelectedRow(params.row);
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Name', width: 130 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     {
//       field: 'button',
//       headerName: 'Action',
//       sortable: false,
//       width: 100,
//       disableClickEventBubbling: true,
//       renderCell: (params) => {
//         return (
//           <button onClick={() => handleButtonClick(params)}>Click Me</button>
//         );
//       },
//     },
//   ];

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//       {selectedRow && <MyComponent row={selectedRow} />}
//     </div>
//   );
// }

// export default DataGridPage;
  
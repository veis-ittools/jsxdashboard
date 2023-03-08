import React, {useEffect, useState} from 'react'
import Datagrid from './Datagrid'
import axios from "axios";




function VeisApiex() {

    const addId=(arr)=> {
        return arr.map((obj, index)=>  {
          return ({...obj,id: index })
        });
      };
    // let naf = props.naf
    let baseURL ='https://veis-ittools.com:5900/INSEE/46.69A/category/GE?nombre=30&ESS=false'
    const userTableStyles = {
        m: 2,
        marginTop: 12,
        height: '370px',
        width: 850,
        // display: 'flex',
        // flexDirection: 'column',
        boxShadow: 2,
        border: 2,
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
    }
    console.log(baseURL)
    const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'Name', headerName: 'Name', width: 200 },
        { field: 'SIREN', headerName: 'SIREN', width: 150 },
        { field: 'SIRET', headerName: 'SIRET', width: 150 },
        { field: 'commune', headerName: 'City', width: 150 },
        { field: 'Code Postal', headerName: 'Code Postal', width: 150 },
      ];
        
    const [users, setUsers] = useState([])
    const [inseerecs, setInseerecs] = useState([])
    const [idadd, setIdadd] = useState(false)
    
    useEffect(() => {
        axios.post(baseURL).then((response) => {
            setUsers(response.data);
            setInseerecs(response.data.INSEE)
            setIdadd(true)
        console.log(response.data)
        console.log('here from now')
        
        
        // inseerecs.map((obj, index)=>  {
        //     return ({...obj,id: index })
        //   });
        // let inseeid = addId(inseerecs)

        });
    }, []);

    // // let insee = users.INSEE
    let inseeid = addId(inseerecs)
    console.log(inseeid)
    // if (!users) {
    //     addId(inseerecs)
    //     console.log(inseerecs)
    // }
    
    if (!users) return null;
    return (

      <div>
        {/* {setIdadd && inseerecs.map((inseerecs, index =>{
            return ({...inseerecs,id: index })
        }))}


        console.log(inseerecs) */}

         <Datagrid
            rows = {inseeid}
            columns = {columns}
            loading = {!inseeid.length}
            sx = {userTableStyles}
            />    

            
      </div>
    )
  }
  
  export default VeisApiex
  
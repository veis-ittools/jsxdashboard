import React, {useEffect, useState} from 'react'
import Datagrid from './Datagrid'
import axios from "axios";

const addId=(arr)=> {
    return arr.map((obj, index)=>  {
      return ({...obj,id: index })
    });
  };


function SampleApi(props) {
    let sirenvar =props.sirenvar
    let baseURL = `https://veis-ittools.com:5900/FR/enterprise/data/${sirenvar}`
    // let baseURL ='https://veis-ittools.com:5900/INSEE/46.69A/category/GE?nombre=3&ESS=false' 
    console.log(sirenvar)
    console.log(baseURL)
    
    
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
      const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'Name', headerName: 'Name', width: 150 },
        { field: 'SIREN', headerName: 'SIREN', width: 150 },
        { field: 'SIRET', headerName: 'SIRET', width: 150 },
        { field: 'commune', headerName: 'City', width: 150 },
        { field: 'codepostal', headerName: 'Code Postal', width: 150 },
      ];

    const [users, setUsers] = useState([])
    const [inseerecs, setInseerecs] = useState()
    // useEffect( ()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then((json) => setUsers(json))
    //     console.log(users)
    //     console.log('here from now')

    // }, [])


    useEffect(() => {
        axios.post(baseURL).then((response) => {
            setUsers(response.data);
            setInseerecs(response.data.INSEE);
          console.log(response.data)
          console.log('here from now')

        });
      }, []);

    //   let insee = users.INSEE
      let inseeid = addId(inseerecs)
      console.log(inseeid)





if (!users) return null;
  return (
    <div>
      <Datagrid
      rows = {inseeid}
      columns = {columns}
      loading = {!inseeid.length}
      sx = {userTableStyles}
      />



      
    </div>
  )
}

export default SampleApi

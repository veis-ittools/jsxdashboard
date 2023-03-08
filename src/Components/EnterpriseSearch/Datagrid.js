import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

// const generateRandom = (params) => {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;  
// }



const Datagrid = ({
    rows, 
    columns,
    loading,
    sx, 
    
}) => {
  return (

    <div >
      <DataGrid 
        rows={rows}
        columns={columns} 
        sx= {sx}
        loading= {loading}
        // getRowId={(rows) =>  generateRandom()}  
        />
    </div>
  )

}

export default Datagrid

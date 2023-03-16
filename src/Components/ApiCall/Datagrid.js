import React from 'react'
import { DataGrid , GridToolbar} from '@mui/x-data-grid';



const Datagrid = ({
    rows, 
    columns,
    loading,
    sx, 
    
}) => {
  return (

    <div >
      {/* <p>
          The Search results listed below
      </p> */}
      <DataGrid 
        rows={rows}
        columns={columns} 
        sx= {sx}
        loading= {loading}
        components={{ Toolbar: GridToolbar }}
        // getRowId={(rows) =>  generateRandom()} 
        autoHeight={true} 
        />
    </div>
  )

}

export default Datagrid

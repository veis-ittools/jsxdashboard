import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MyComponent from './MyComponent';

function DataGridPage() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleButtonClick = (params) => {
    setSelectedRow(params.row);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
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
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      {selectedRow && <MyComponent row={selectedRow} />}
    </div>
  );
}

export default DataGridPage;

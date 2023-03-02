
const export userTableStyles = {
    m: 2,
    marginTop: 2,
    height: '370px',
    width: 800,
    // display: 'flex',
    // flexDirection: 'column',
    boxShadow: 2,
    border: 2,
    borderColor: 'primary.light',
    '& .MuiDataGrid-cell:hover': {
        color: 'primary.main',
    },
}

const export columns = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'SIREN', headerName: 'SIREN', width: 100 },
    { field: 'SIRET', headerName: 'SIRET', width: 120 },
    { field: 'commune', headerName: 'City', width: 135 },
    { field: 'Département', headerName: 'Département', width: 120 },
    { field: 'Région', headerName: 'Région', width: 120 },
    { field: 'Category', headerName: 'Category', width: 75 },
    { field: 'NAF', headerName: 'NAF', width: 75 },

    { field: 'Code Postal', headerName: 'Code Postal', width: 100 },
];
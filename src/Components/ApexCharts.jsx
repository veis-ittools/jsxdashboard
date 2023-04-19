import React from 'react'
import { LineChart,Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Box, Typography, useTheme } from "@mui/material";




function ApexCharts(props) {
  let data = props.data

  // console.log('data fom rev api for chart', data)

  return (

    <>

      <ResponsiveContainer width="90%" aspect={1}>
      <LineChart width={500} height={250} data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Chiffre d'affaires" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  </>
  )
}

export default ApexCharts

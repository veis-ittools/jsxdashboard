import React from 'react'
import { LineChart,Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Box, Typography, useTheme } from "@mui/material";

const data = [
  {
    "name": "2020",
    "Chiffre d'affaires": 71154803,

  },
  {
    "name": "2019",
    "Chiffre d'affaires": 91027987,

  },
  {
    "name": "2018",
    "Chiffre d'affaires": 140469088,

  },
  {
    "name": "2017",
    "Chiffre d'affaires": 164462307,

  },
  {
    "name": "2016",
    "Chiffre d'affaires": 169873083,
  },
  // {
  //   "name": "Page F",
  //   "uv": 2390,
  //   "pv": 3800,
  //   "amt": 2500
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // }
]
// const data2 = [
//   {
//     "name": "2020",
//     "Chiffre d'affaires": -21.8319493322,

//   },
//   {
//     "name": "2019",
//     "Chiffre d'affaires": -35.1971396013,

//   },
//   {
//     "name": "2018",
//     "Chiffre d'affaires": -14.5888863155,

//   },

// ]


function ApexCharts() {
  return (



    <>

      <ResponsiveContainer width="90%" aspect={1}>
      <LineChart width={730} height={250} data={data}
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

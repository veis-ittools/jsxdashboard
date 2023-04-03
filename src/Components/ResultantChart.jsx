import React from 'react'
import { LineChart,Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data2 = [

    {
      "name": "2020",
      "Résultat": 59865496,
  
    },
    {
      "name": "2019",
      "Résultat": 246052543,
  
    },
    {
      "name": "2018",
      "Résultat": 240849561,
  
    },
    {
      "name": "2017",
      "Résultat": 71463777,
  
    },
    {
        "name": "2016",
        "Résultat": 216856325,
    
      },
  
  ]
  


function ResultantChart() {
  return (
    <>

      <ResponsiveContainer width="90%" aspect={1}>
      <LineChart width={500} height={250} data={data2}
        margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Résultat" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  </>
  )
}

export default ResultantChart

import React from 'react'
import { LineChart,Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data2 = [

//     {
//       "name": "2020",
//       "CAPercentDifferent": -22,
  
//     },
//     {
//       "name": "2019",
//       "CAPercentDifferent": -35,
  
//     },
//     {
//       "name": "2018",
//       "CAPercentDifferent": -14,
  
//     },
//     {
//       "name": "2017",
//       "CAPercentDifferent": -3,
  
//     },
  
  
//   ]
  

function PercentDiffer(props) {
    let data = props.data
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
        <Line type="monotone" dataKey="Effectif" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  </>
  )
}

export default PercentDiffer

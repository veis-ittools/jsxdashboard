// import React from 'react'
// import { LineChart, Line, Legend, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


// const data = [
//   {
//     "name": "Page A",
//     "uv": 4000,
//     "pv": 2400
//   },
//   {
//     "name": "Page B",
//     "uv": 3000,
//     "pv": 1398
//   },
//   {
//     "name": "Page C",
//     "uv": 2000,
//     "pv": 9800
//   },
//   {
//     "name": "Page D",
//     "uv": 2780,
//     "pv": 3908
//   },
//   {
//     "name": "Page E",
//     "uv": 1890,
//     "pv": 4800
//   },
//   {
//     "name": "Page F",
//     "uv": 2390,
//     "pv": 3800
//   },
//   {
//     "name": "Page G",
//     "uv": 3490,
//     "pv": 4300
//   }
// ]


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
//   {
//     "name": "2017",
//     "Chiffre d'affaires": -3.185187379,

//   },
//   // {
//   //   "name": "2016",
//   //   "Chiffre d'affaires": 169873083,
//   // },
//   // {
//   //   "name": "Page F",
//   //   "uv": 2390,
//   //   "pv": 3800,
//   //   "amt": 2500
//   // },
//   // {
//   //   "name": "Page G",
//   //   "uv": 3490,
//   //   "pv": 4300,
//   //   "amt": 2100
//   // }
// ]


// function Bar() {
//   return (

//       <ResponsiveContainer width="90%" aspect={3}> 
//       <h2>Quarterly sales figures for mobile phones</h2>
//         <LineChart width={730} height={250} data={data2}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="Chiffre d'affaires" stroke="#8884d8" />
//           {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//         </LineChart>
//     </ResponsiveContainer>


//   )
// }

// export default Bar
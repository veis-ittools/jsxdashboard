import { Box } from "@mui/material";
import Header from "../../Components/Header";
import ApexCharts from "../../Components/ApexCharts";

import React from 'react'

function Apex() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <ApexCharts />
      </Box>
    </Box>
  )
}

export default Apex
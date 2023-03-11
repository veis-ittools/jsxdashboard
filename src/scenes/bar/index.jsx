import { Box } from "@mui/material";
import Header from "../../Components/Header";

import Bar from "../../Components/BarChart";

const BarC = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <Bar />
      </Box>
    </Box>
  );
};

export default BarC;
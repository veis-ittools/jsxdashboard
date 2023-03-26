import { Typography, Box, useTheme } from "@mui/material";
// import { tokens } from "../theme";
import { tokens } from "../../theme";

import NewMainsearch from "../Mainsearch/NewMainsearch";
import NewSapSearch from "./NewSapSearch";

function SapSearch() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box mb="25px" marginLeft={2}>
      <Typography
        variant="h3"
        color={colors.grey[100]}
        // fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        SAP BI Search
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        Search using VINCI Classification
      </Typography>
      
      {/* <NewMainsearch></NewMainsearch>   */}
      <NewSapSearch></NewSapSearch>

    </Box>
    
  )
}

export default SapSearch
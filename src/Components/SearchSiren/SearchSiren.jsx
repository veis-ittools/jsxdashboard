import React, { useState } from 'react'
import { Box, Button ,TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from '../../Components/Header';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import InfoBasic from './InfoBasic';

function SearchSiren() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const [siren, setSiren] = useState('')
    // const [buttonclickstate, setButtonclickstate]  = useState(false)


    const [inputsiren, setInputSiren] = useState('')
    const [pastedsiren, setPasteSiren] = useState('')
    const [validflag, setValidFlag] = useState(false)
    const [pasteflag, setPasteFlag] = useState(false)

    const [buttonclickstate, setButtonclickstate]  = useState(false)
    const onPaste = (event) => {
        let events_s  =  event.clipboardData.getData("text/plain")
        setPasteSiren(events_s)
        console.log('EVENTS', events_s)

        if (events_s.toString().length === 9){
          console.log('code is here')
          setPasteFlag(true)
          // setValidFlag(true)
          // setInputSiren(events_s)
        } 
        else { setPasteFlag(false)}
        console.log('pasted siren', pasteflag);
        // console.log('input siren', inputsiren);
      };
  
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-around" alignItems="center"   >
            <Header title="Enterprise Search" subtitle="Search using the SIREN for Suppliers in France (Section under Develpment*)" />

            <Box   
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
                >
                
                <TextField
                    variant="standard"
                    name="siren"
                    label="Enter SIREN"
                    size="small"
                    id = 'siren'
                    sx={{ marginTop:1,
                    mx:5 }}
                    // onChange= {(e)=>{
                    //     console.log(e.target.value);
                    //     setSiren(e.target.value)
                        
                    // }}
                    onChange ={(events)=>{

                        if (pasteflag === false){
                          console.log('IF pasted flag false code')
                          setInputSiren( events.target.value)
                          // setValidFlag(true)

                        }
                        // setInputSiren( events.target.value)
                        console.log(inputsiren);
                        
                      }
                     
                    }
                    inputProps={{ onPaste }}
                    
                    />


                    


                <Button
                    onClick={()=>{
                        setButtonclickstate(!buttonclickstate)
                    }}
                    sx={{
                    backgroundColor: colors.blueAccent[600],
                    color: colors.grey[100],
                    fontSize: "13px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    // marginRight: "150px"
                    }}
                    
                >
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    Search Supplier
                </Button>


            </Box>

        </Box>
        {/* {buttonclickstate && <InfoBasic siren = {siren}></InfoBasic> } */}
        {buttonclickstate === true ? <InfoBasic sirenvar= {inputsiren} pastedsirenvar = {pastedsiren}></InfoBasic> : null}
    </Box>
  )
}

export default SearchSiren

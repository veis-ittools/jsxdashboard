import React, { useState } from 'react'
import { Box, Button ,TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from '../../Components/Header';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import InfoBasic from './InfoBasic';

function SearchSiren() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [siren, setSiren] = useState('')
    // const [buttonclickstate, setButtonclickstate]  = useState(false)


   

    const [inputsiren, setInputSiren] = useState('')
    const [pastedsiren, setPasteSiren] = useState('')
    const [validflag, setValidFlag] = useState(false)
    const [pasteflag, setPasteFlag] = useState(false)



    
    const onPaste = (event) => {
        let events_s  =  event.clipboardData.getData("text/plain")
        setPasteSiren(events_s)
        // setInputSiren(events_s)
        console.log('EVENTS', events_s)

        if (events_s.toString().length === 9)  {
          console.log('code is here')
          setPasteFlag(true)
        //   setValidFlag(true)
          // setInputSiren(events_s)
          
        } 
        else { setPasteFlag(false)}
        console.log('pasted siren', pasteflag);
        // console.log('input siren', inputsiren);
      };
 

    let [buttonclickstate, setButtonclickstate]  = useState(false)
    
    

  
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-around" alignItems="center"   >
            <Header title="Enterprise Search" subtitle="Rechercher des fournisseurs dans tous les secteurs en FRANCE" />

            <Box   
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
                >
                

                <TextField
                    variant="standard"
                    margin="normal"
                    // fullWidth
                    name="siren"
                    label="Enter SIREN"
                    size="small"
                    id = 'siren'
                    sx={{ marginTop:2,
                    mx:6
         
                    }}

                    // value = {inputsiren}
                    autoFocus
                    // onChange={handleChange}
                    // onChange= {handleChange}
                    onChange ={(events)=>{

                        if (pasteflag === false){
                          console.log('IF pasted flag false code')
                          setInputSiren( events.target.value)
                        //   setValidFlag(true)

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
                        console.log('button flag==', buttonclickstate)
                    }}
                    // onClick={}
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
        {/* {buttonclickstate && <InfoBasic siren = {inputsiren} pastedsiren= {pastedsiren}></InfoBasic> } */}
        { buttonclickstate === true ? <InfoBasic siren = {inputsiren} pastedsiren= {pastedsiren}></InfoBasic> : null}
        {/* {buttonclickstate === true ? <InfoBasic sirenvar= {siren} pastedsiren= {pastedsiren} ></InfoBasic> : null} */}
        {/* {buttonclickstate === true ? <InfoBasic sirenvar= {text} ></InfoBasic> : null}  */}
    </Box>
  )
}

export default SearchSiren

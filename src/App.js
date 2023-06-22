import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


import LandingPage from "./Components/LandingPage";

import FAQ from "./scenes/Faq";
import Sirensearch from "./scenes/Sirensearch";
// import BarC from "./scenes/bar";
import BlankPage from "./scenes/blankpage";
import NewMainsearch from "./Components/Mainsearch/NewMainsearch";
// import SapSearch from "./Components/SapSearch/SapSearch";
import RgeSuppliers from "./Components/RgeSuppliers/RgeSuppliers";
import AllCountrySAP from "./Components/AllCountrySAP/AllCountrySAP";

import FeedbackBox from "./scenes/global/FeedbackBox";
import NewMainSAP from "./Components/NewMainSAP/NewMainSAP";
import OpenSpain from "./Components/OpenSpain/OpenSpain";

import SiteDown from "./scenes/global/SiteDown";

import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


function ProfileContent() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                {/* <Mainseach></Mainseach> */}
                
                <Routes>
                  <Route path="/" element={<NewMainSAP />} />
                  <Route path="/sirensearch" element={<Sirensearch />} />  
                  <Route path="/inseesearch" element={<NewMainsearch />} />

                  <Route path="/rgesearch" element={<RgeSuppliers />} />
                  <Route path="/team" element={<AllCountrySAP />} />
                  <Route path="/contacts" element={<BlankPage />} /> 
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/inactive" element={<BlankPage />} /> 
                  <Route path="/help" element={<FeedbackBox />} />
                  <Route path="/newpage" element={<NewMainSAP />} />
                   
                  <Route path="/openspain" element={<OpenSpain />} />

                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </>
    
  );
}



/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
// const MainContent = () => {    
//     return (
//         <div className="App">
//             <AuthenticatedTemplate>
//                 <ProfileContent />
//             </AuthenticatedTemplate>

//             <UnauthenticatedTemplate>
//                 <LandingPage/>
//             </UnauthenticatedTemplate>
//         </div>
//     );
// };




// TEST at UN AUTH FOR TESTING
const MainContent = () => {    
  return (
      <div className="App">
            <ProfileContent />
      </div>
  );
};

// PROD DEFAULT CONTENT
export default function App() {
    return (

          <MainContent />

    );
}


// SITE DOWN
// export default function App() {
//   return (

//         <SiteDown />

//   );
// }

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

// import FAQ from "./scenes/faq";


import Mainseach from "./Components/Mainsearch/Mainseach";
import FAQ from "./scenes/Faq";
import Sirensearch from "./scenes/Sirensearch";
// import BarC from "./scenes/bar";
import BlankPage from "./scenes/blankpage";
// import Apex from "./scenes/apex";

// import Dashboard from "./scenes/dashboard";


import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { PageLayout } from "./Components/PageLayout";
import { ProfileData } from "./Components/ProfileData";
import { callMsGraph } from "./graph";
import Button from "react-bootstrap/Button";
// import "./styles/App.css";




// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <>
//     <AuthenticatedTemplate>
//       <PageLayout>
//         <ColorModeContext.Provider value={colorMode}>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <div className="app">
//               <Sidebar isSidebar={isSidebar} />
//               <main className="content">
//                 <Topbar setIsSidebar={setIsSidebar} />
//                 {/* <Mainseach></Mainseach> */}
                
//                 <Routes>
//                   <Route path="/" element={<Mainseach />} />
//                   <Route path="/sirensearch" element={<Sirensearch />} />  
//                   <Route path="/team" element={<BlankPage />} />
//                   <Route path="/contacts" element={<BlankPage />} /> 
//                   <Route path="/faq" element={<FAQ />} />
//                   <Route path="/about" element={<BlankPage />} /> 
//                   <Route path="/help" element={<BlankPage />} /> 

//                 </Routes>
//               </main>
//             </div>
//           </ThemeProvider>
//         </ColorModeContext.Provider>
//       </PageLayout>
//     </AuthenticatedTemplate>

//     <UnauthenticatedTemplate>
//         {/* <p>This will only render if a user is not signed-in.</p> */}
//         <PageLayout />
//     </UnauthenticatedTemplate>

//     </>
    
//   );
// }

// export default App;



// import React, { useState } from "react";
// import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
// import { loginRequest } from "./authConfig";
// import { PageLayout } from "./components/PageLayout";
// import { ProfileData } from "./components/ProfileData";
// import { callMsGraph } from "./graph";
// import Button from "react-bootstrap/Button";
// import "./styles/App.css";

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        });
    }

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
                    <Route path="/" element={<Mainseach />} />
                    <Route path="/sirensearch" element={<Sirensearch />} />  
                    <Route path="/team" element={<BlankPage />} />
                    <Route path="/contacts" element={<BlankPage />} /> 
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/about" element={<BlankPage />} /> 
                    <Route path="/help" element={<BlankPage />} /> 

                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </>
    );
};

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {    
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5 className="card-title">Please sign-in to see your profile information.</h5>
            </UnauthenticatedTemplate>
        </div>
    );
};

export default function App() {
    return (
        <PageLayout>
            <MainContent />
        </PageLayout>
    );
}

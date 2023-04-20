import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SearchIcon from '@mui/icons-material/Search';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

// import { blue, red } from "@mui/material/colors";
import myImgSrc from './vincijpg.jpg';
// import FlashOffIcon from '@mui/icons-material/FlashOff';
// import Tooltip from '@mui/material/Tooltip';
import ReactCountryFlag from "react-country-flag"

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    
    <Box
 
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                  {/* <Typography variant="h4"  color={colors.grey[100]}>
                    Overview
                  </Typography> */}
                <Box
                  component="img"
                  sx={{
                    height: 75,
                    width: 130,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  // src = './Logo-Vinci-Energies.jpg'
                  src= {myImgSrc}
                  // 
                  // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              {/* <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box> */}
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  // fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  NAVIK
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Substainable Sourcing 
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="SAP Search"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
              
            <Box paddingLeft={10}>
 
              <ReactCountryFlag 
                            style={{
                              fontSize: '2em',
                              lineHeight: '2em',
                          }}

                          countryCode="FR" svg />
              </Box>
  
            <Item
              title=" FR- INSEE Search"
              to="/inseesearch"
              icon={<ManageSearchIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Item
              title="Certified RGE Suppliers"
              to="/rgesearch"
              icon={<SearchIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Enterprise Search"
              to="/sirensearch"
              icon={<TravelExploreIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {/* <Item
              title="SIREN "
              to="/sirensearch"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />  */}
            {/* <Item
              title="About NAAVIK"
              to="/about"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Item
              title="Help us to Improve"
              to="/help"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Supplier Data *inactive
            </Typography>
            <Item
              title="Manage Team"
              to="/inactive"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Contact Information"
              to="/inactive"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
  */}



            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Business *inactive
            </Typography> */}

            {/* <Item
              title="Revenue"
              to="/inactive"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
   
            
            <Item
              title="Purchase History"
              to="/inactive"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="KPI's"
              to="/inactive"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Ethics & Compliance"
              to="/inactive"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
import React from 'react'
import { Box, useTheme } from "@mui/material";
// import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header    from "../../Components/Header";



function ExampleComp() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box m="20px">
        <Header subtitle="More Information " />
  
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Revenue  *Inactive
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                *Inactive

            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Purchase History  *Inactive
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                *Inactive

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Ethics and Complaince *Inactive
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                *Inactive

            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
               Qu'est-ce que le CODE NAF ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                La NAF, nomenclature d'activités française, est une nomenclature des activités économiques productives, principalement élaborée pour faciliter l'organisation de l'information économique et sociale. Afin de faciliter les comparaisons internationales, elle a la même structure que la nomenclature d'activités européenne NACE, elle-même dérivée de la nomenclature internationale CITI.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Qu'est-ce que l'économie sociale et solidaire (ESS) ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Le concept d'économie sociale et solidaire (ESS) désigne un ensemble d'entreprises organisées sous forme de coopératives, mutuelles, associations, ou fondations, dont le fonctionnement interne et les activités sont fondés sur un principe de solidarité et d'utilité sociale.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Quelles sont les données utilisées par NAVIK ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                NAVIK utilise des données provenant de différentes sources, l'application est constamment connectée avec des données provenant de SAP-BI(limited), INSEE (Opendata), DataGrippe (Revenue), Lamarche Inclusive, FR Region data.  
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        
        {/* <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              The Final Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </Box>
    );
}

export default ExampleComp

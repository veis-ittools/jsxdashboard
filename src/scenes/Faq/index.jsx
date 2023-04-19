import { Box, useTheme } from "@mui/material";
// import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header    from "../../Components/Header";


const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
              Qu'est-ce que NAVIK ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            NAVIK est une plateforme de recherche de fournisseurs dans tous les secteurs. Notre mission est de fournir une plateforme facile à utiliser qui aide les utilisateurs à trouver des fournisseurs à partir de SAP BI(*limited) et des fournisseurs à travers la France en utilisant les données ouvertes de l'INSEE.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
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
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Le label « reconnu garant de l’environnement » RGE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

              Le label RGE, un gage de qualité des professionnels de la rénovation énergétique
              En faisant appel à un professionnel RGE, les particuliers et les entreprises s’assurent d’avoir affaire à un professionnel compétent qui réalise des travaux de qualité.

              Pour obtenir le label RGE, les prestataires de rénovation énergétique (entreprises et artisans) doivent témoigner d’une expertise dans la rénovation énergétique et de professionnalisme dans l’exécution de leurs travaux. L’acquisition du label RGE repose sur un examen de la conformité de l’entreprise à un référentiel d'exigences de moyens et de compétences. Cet examen et la délivrance consécutive du signe de qualité sont assurés par des organismes de qualification (Qualibat, Qualit’EnR et Qualifelec) ou de certification (Certibat et Cerqual) ayant passé une convention avec l’Etat et accrédités par le Comité Français d’accréditation (COFRAC).


          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

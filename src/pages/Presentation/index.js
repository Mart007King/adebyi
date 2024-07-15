// Presentation.js

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Images
import bgImage from "assets/images/ade-hero.jpg";
import designBg from "assets/images/designBg.jpg";

// Custom Divider
import CustomDivider from "./components/CustomDivider";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

function Presentation() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Scale Up With Gbenga Adebiyi
          </Typography>
          <Button
            color="warning"
            variant="contained"
            href="https://linktr.ee/debiyi"
          >
            Join My Class
          </Button>
        </Toolbar>
      </AppBar>
      <MKBox
        minHeight="55vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          opacity: 0.9,
        }}
      >
        <Container>
          <Card
            sx={{
              p: 2,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <Grid container item xs={12} justifyContent="center" mx="auto">
              <MKTypography
                variant="h2"
                color="warning"
                fontWeight="bold"
                textAlign="center"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Scale Up with Gbenga Adebiyi
              </MKTypography>
              <MKTypography
                variant="body1"
                color="black"
                fontWeight="bold"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                PROUD TEACHER | I help Africans Earn Online $$$ with their Skills and Expertise.
              </MKTypography>
            </Grid>
          </Card>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <CustomDivider />
        <Information />
        <CustomDivider />
        <MKBox
          width="100%"
          sx={{
            backgroundImage: `url(${designBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <DesignBlocks />
        </MKBox>
        <CustomDivider />
        <Testimonials />
        <CustomDivider />
        <Download />
      </Card>
      <MKBox pt={6} px={1} mt={6} display="flex" justifyContent="center">
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
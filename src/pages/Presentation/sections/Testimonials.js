/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Information.js

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// React Twitter Embed component
import { TwitterTweetEmbed } from "react-twitter-embed";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Testimonials</MKTypography>
          <MKTypography variant="body1" color="info" mb={2}>
            My Students have made over $20,000,000+ in Combined Income
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TwitterTweetEmbed tweetId="1609259895391404037" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

// @mui icons
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/ade-pic.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Gbenga Adebiyi",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedinIcon />,
      link: "https://www.linkedin.com/in/gbenga-adebiyi/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://x.com/gbengabiyi",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@gbengabiyi/videos",
    },
  ],
  menus: [
    {
      name: "resources",
      items: [
        { name: "More Books/Products", href: "https://gbengabiyi.selar.co/" },
        { name: "View on Selar", href: "https://gbengabiyi.selar.co/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Built by{" "}
      <MKTypography
        component="a"
        href="https://mart007king.github.io/Portfolio/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Martins Samuel
      </MKTypography>
      .
    </MKTypography>
  ),
};

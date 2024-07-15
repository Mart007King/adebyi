// CustomDivider.js
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";

const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  height: "3px",
  margin: theme.spacing(3, 0),
}));

export default CustomDivider;

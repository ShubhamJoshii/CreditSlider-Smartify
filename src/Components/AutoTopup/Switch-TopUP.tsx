import Switch from "@mui/material/Switch";
import styled from 'styled-components';


// Switch Styling Component
const TopUPSwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
    ".MuiSwitch-track": {
      backgroundColor: "#2cae9d !important",
      opacity:"1 !important",
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        left: 12,
      },
      "&::after": {
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      backgroundColor:"white",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

export default TopUPSwitch
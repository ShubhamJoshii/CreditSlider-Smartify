import Switch from "@mui/material/Switch";
import styled from 'styled-components';


// Switch Styling Component
const TopUPSwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
    ".Mui-checked+.MuiSwitch-track":{
      backgroundColor: "#2cae9d !important",
    },
    ".MuiSwitch-track": {
      backgroundColor: "#7B7B7B",
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
    "&.Switch-checked": {
      backgroundColor: "#7B7B7B !important",
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
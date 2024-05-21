import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TopupSlider from "./TopupSlider";
import TopUPSwitch from "./Switch-TopUP";
import { Link } from "@mui/material";

// CONFIRM AUTO-PURCHASE Button Styles
const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "#9747ff",
  color: "white",
  fontWeight: 700,
  textTransform: "initial",
  "&:hover": {
    backgroundColor: "#9747ff",
  },
  "@media screen and (max-width: 850px)": {
    marginTop: "40px",
  },
}));

// Auto-TopUp Main Component
const AutoTopup = () => {
  // useState for mainting value like show AutoTopUp Setting and updatingValues
  const [showAutoTopUp, setShowAutoTopUp] = useState<boolean>(false);
  const [topUpValue, settopUpValue] = useState<any>({
    cost: 10,
    credits: 1200,
  });

  return (
    <Box
      sx={{
        padding: {xs:"40px 20px",sm:"40px"},   // adding padding according to breakpoints
        borderRadius: "24px",
        width: "100%",
        boxSizing:"border-box",
        boxShadow: "0 0 10px #d9cece",
        margin:"auto",
        marginTop: "80px"
      }}
    >
      <Box
        sx={{
          width: {sm:"100%", md:"910px"},
          fontFamily: "poppins",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: 1,
            marginBottom:"6px",
          
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Setup Auto Top-up
          </Typography>

          {/* Switch for Toggle Top-Up Slider Show or not */}
          <TopUPSwitch
            checked={showAutoTopUp}
            sx={{
              padding: "9px",
            }}
            onChange={(event: any) => {
              setShowAutoTopUp(event.target.checked);
            }}
          />
        </Box>

        {!showAutoTopUp && (
          <Typography
            variant="h4"
            sx={{
              textAlign: "start",
              color: "#7B7B7B",
              fontWeight: "400",
              fontSize:"16px",
              letterSpacing: ".18px",
              lineHeight: "24px",
            }}
          >
            Once the credit goes below the threshold value, credits can be auto purchased. Setup auto top-up to enjoy uninterrupted services. You can disable this anytime to stop auto top-up.
          </Typography>
        )}
      </Box>
      {/* Top-Up Slider Show when showAutoTopUp is true */}
      {showAutoTopUp && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 2,
            width: {sm:"100%", md:"910px"},
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "start",
              color: "#7B7B7B",
              fontWeight: "400",
              fontSize:"16px",
              letterSpacing: ".18px",
              lineHeight: "24px",
            }}
          >
            Once the credit goes below a minimum threshold{" "}
            <Typography variant="body1" sx={{color:"#9747ff", fontWeight:600, display:"inline-block"}}>50</Typography>
            , we will auto-purchase{" "}
            <Typography variant="body1" sx={{color:"#9747ff", fontWeight:600, display:"inline-block"}}>{topUpValue.credits}</Typography>, we will
            credits and add them to your account.{" "}
            <Link href="/" sx={{font:"inherit",color:"#7B7B7B",textDecoration:"underline", fontWeight:700}}>
              Learn more
            </Link>
          </Typography>

          {/* TopUp Slider */}
          <Box sx={{ width: "100%", height: "100px" }}>
            <TopupSlider
              topUpValue={topUpValue}
              settopUpValue={settopUpValue}
            />
          </Box>

          {/* CONFIRM AUTO-PURCHASE Button */}
          <ColorButton
            variant="contained"
            sx={{
              padding:"16px",
              width:"268px",
              fontWeight:"600",
              height:"48px",
              fontSize:"16px",
              borderRadius:"8px"
            }}
            onClick={() =>{
              // for printing the selected auto Top-Up value
              console.log(
                `Your Auto TopUp is set at cost $${topUpValue.cost} for credits ${topUpValue.credits}`
              )
              console.log(
                `Credit Amount $${topUpValue.cost}`
              )}
            }
          >
            Confirm auto-purchase
          </ColorButton>
        </Box>
      )}
    </Box>
  );
};

export default AutoTopup;

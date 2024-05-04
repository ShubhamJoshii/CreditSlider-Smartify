import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TopupSlider from "./TopupSlider";
import TopUPSwitch from "./Switch-TopUP";


// CONFIRM AUTO-PURCHASE Button Styles
const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "#9747ff",
  color:"white",
  fontWeight:700,
  textTransform:"initial",
  "&:hover": {
    backgroundColor: "#9747ff",
  },
}));

// Auto-TopUp Main Component
const AutoTopup = () => {
  // useState for mainting value like show AutoTopUp Setting and updatingValues
  const [showAutoTopUp, setShowAutoTopUp] = useState<boolean>(true);       
  const [topUpValue, settopUpValue] = useState<any>({
    cost: 10,
    credits: 1200,
  });

  return (
    <Box
      sx={{
        padding: "30px",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 0 10px #d9cece",
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: 1,
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bolder" }}>
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

      {/* Top-Up Slider Show when showAutoTopUp is true */}
      {showAutoTopUp && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 1.5,
          }}
        >
          <Typography
            variant="body1"
            style={{ textAlign: "start", color: "grey" }}
          >
            Once the credit goes below a minimum threshold{" "}
            <span style={{ color: "#9747ff", fontWeight: 600 }}>50</span>, we
            will auto-purchase{" "}
            <span style={{ color: "#9747ff", fontWeight: 600 }}>
              {topUpValue.credits}
            </span>{" "}
            credits and add them to your account.{" "}
            <a
              href="/"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "inherit",
              }}
            >
              Learn more
            </a>
          </Typography>

          {/* TopUp Slider */}
          <Box sx={{ width: "100%", height: "100px" }}>
            <TopupSlider settopUpValue={settopUpValue} />
          </Box>

          {/* CONFIRM AUTO-PURCHASE Button */}
          <ColorButton
            variant="contained"
            onClick={() =>
              // for printing the selected auto Top-Up value
              console.log(`Your Auto TopUp is set at cost $${topUpValue.cost} for credits ${topUpValue.credits}`)
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

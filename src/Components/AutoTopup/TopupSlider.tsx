import { Box, Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// TypeScript type define
interface TopUpValueType {
  cost: number;
  credits: number;
}

interface ChildProps {
  topUpValue: TopUpValueType;
  settopUpValue: React.Dispatch<React.SetStateAction<number>>;
}

interface SliderData {
  value: number;
  cost: number;
  credits: number;
  label: any;
}

// for creating a label for slider
function setLabel(cost: number, credit: number) {
  return (
    <Box
      sx={{
        textAlign: "start",
        fontSize: { xs: "14px", sm: "14px", md: "16px" },
      }}
    >
      <Typography
        variant="body1"
        sx={{ font: "inherit", fontWeight: 700, color: "black" }}
      >
        ${cost}
      </Typography>
      <Box
        sx={{
          color: "#7B7B7B",
          font: "inherit",
          fontWeight: 500,
          display: { xs: "grid", sm: "block" },
        }}
      >
        {/* {credit} credits */}
        <Typography
          variant="body1"
          sx={{ display: "inline-block", font: "inherit" }}
        >
          {credit}
        </Typography>{" "}
        <Typography
          variant="body1"
          sx={{ display: "inline-block", font: "inherit" }}
        >
          credits
        </Typography>
      </Box>
    </Box>
  );
}

// Top-Up Slider Data
const sliderData: SliderData[] = [
  {
    value: 20,
    cost: 5,
    credits: 500,
    label: setLabel(5, 500),
  },
  {
    value: 40,
    cost: 10,
    credits: 1200,
    label: setLabel(10, 1200),
  },
  {
    value: 60,
    cost: 15,
    credits: 1700,
    label: setLabel(15, 1700),
  },
  {
    value: 80,
    cost: 20,
    credits: 2500,
    label: setLabel(20, 2500),
  },
  {
    value: 100,
    cost: 25,
    credits: 3900,
    label: setLabel(25, 3900),
  },
  {
    value: 120,
    cost: 30,
    credits: 5000,
    label: setLabel(30, 5000),
  },
];

// Slider Component
const TopupSlider: React.FC<ChildProps> = ({ topUpValue, settopUpValue }) => {
  // for providing a Default value to slider by finding equivalent cost
  const [defaultValue, setDefaultValue] = useState(20);

  // for running only when topUpValue Updates
  useEffect(() => {
    let temp: number =
      sliderData.find((e) => topUpValue?.cost === e.cost)?.value || 20;
    setDefaultValue(temp);
  }, [topUpValue]);

  // for updating Auto-Top state
  const updateTopUp = (event: any) => {
    // finding a selected event from sliderData
    let temp = sliderData.find((items) => items.value === event.target.value);
    // for updating State by providing only cost and credits from variable temp for better understading
    let temp2: any = {
      cost: temp?.cost,
      credits: temp?.credits,
    };
    // setting up a new State
    settopUpValue(temp2);
  };

  return (
    <Slider
      aria-label="Restricted values"
      defaultValue={20}
      name="autoTopup"
      value={defaultValue}
      onChange={updateTopUp}
      step={20}
      marks={sliderData}
      min={20}
      max={120}
      valueLabelDisplay="off"
      sx={{
        color: "#9747ff",
        width: "89%",
        height: "8px",
        "& .MuiSlider-rail": {
          width: {
            xs: "calc(90vw - 20px)",
            sm: "calc(90vw - 80px)",
            md: "910px",
          },
          opacity: 1,
          color: "#E4E7EC",
        },
        // for changing styling of Slider Thumb Circle
        "& .MuiSlider-thumb": {
          backgroundImage: "radial-gradient(white 35%, #9747ff 0%)",
        },
        "& .MuiSlider-mark": {
          display: "none",
        },
        "& .MuiSlider-markLabel": {
          transform: "translate(0)",
        },
      }}
    />
  );
};

export default TopupSlider;

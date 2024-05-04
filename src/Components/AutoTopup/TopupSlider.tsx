import { Slider } from "@mui/material";
import React from "react";

// TypeScript
interface ChildProps {
  settopUpValue: React.Dispatch<React.SetStateAction<number>>;
}

interface SliderData {
  value: number;
  cost: number;
  credits: number;
  label: any;
}

// for creating a label for slider
function setLabel(cost: number, credit: number, lastElement: string = "0px") {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: lastElement,
      }}
      className="sliderLabels"
    >
      <div style={{ textAlign: "center", width: "40%" }}>
        <p style={{ fontWeight: "bolder" }}>$ {cost}</p>
        <p
          style={{ color: "grey", marginTop: "-10px" }}
          className="credit-Text"
        >
          <span>{credit}</span> <span>credits</span>
        </p>
      </div>
    </div>
  );
}

// Top-Up Slider Data
const sliderData: SliderData[] = [
  {
    value: 0,
    cost: 5,
    credits: 500,
    label: setLabel(5, 500),
  },
  {
    value: 20,
    cost: 10,
    credits: 1200,
    label: setLabel(10, 1200),
  },
  {
    value: 40,
    cost: 15,
    credits: 1700,
    label: setLabel(15, 1700),
  },
  {
    value: 60,
    cost: 20,
    credits: 2500,
    label: setLabel(20, 2500),
  },
  {
    value: 80,
    cost: 25,
    credits: 3900,
    label: setLabel(25, 3900),
  },
  {
    value: 100,
    cost: 30,
    credits: 5000,
    label: setLabel(30, 5000, "-90px"),
  },
];


// Slider Component
const TopupSlider: React.FC<ChildProps> = ({ settopUpValue }) => {

  // for updating Auto-Top state
  const updateTopUp = (event: any) => {
    // finding a selected event from sliderData
    let temp = sliderData.find((items) => items.value === event.target.value);
    // for updating State by providing only cost and credits from variable temp
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
      step={20}
      marks={sliderData}
      valueLabelDisplay="off"
      style={{ color: "#9747ff" }}
      // for changing styling of Slider Thumb Circle
      sx={{
        "& .MuiSlider-thumb": {
          backgroundImage: "radial-gradient(white 35%, #9747ff 0%)",
        },
      }}
      name="autoTopup"
      onChange={updateTopUp}
    />
  );
};

export default TopupSlider;

import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";

// TypeScript
interface TopUpValueType {
  cost: number;
  credits: number;
}

interface ChildProps {
  topUpValue:TopUpValueType;
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
    <div
      className="flex justify-center items-center"
    >
      <div className="text-center w-[40%]">
        <p className="font-bold">$ {cost}</p>
        <p
          className="rotate-[-90deg] whitespace-nowrap mt-[55px] sm:text-center sm:whitespace-pre-line custome850:text-start 
          sm:rotate-0 
          custome850:whitespace-nowrap  text-[grey] sm:mt-0"
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
    label: setLabel(5, 50),
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
    label: setLabel(30, 5000),
  },
  {
    value: 120,
    cost: 30,
    credits: 5000,
    label: setLabel(30, 5000),
  },
];


// Slider Component
const TopupSlider: React.FC<ChildProps> = ({topUpValue, settopUpValue }) => {
  
  // for providing a Default value to slider by finding equivalent cost
  const [defaultValue, setDefaultValue] = useState(20);
  
  // for running only when topUpValue Updates
  useEffect(()=>{
    let temp:number = sliderData.find((e) => topUpValue?.cost === e.cost)?.value || 20;
    setDefaultValue(temp);
  },[topUpValue])

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
      value={defaultValue}
      marks={sliderData}
      valueLabelDisplay="off"
      sx={{
        color:"#9747ff",
        width:"95%",
        "& .MuiSlider-rail": {
          width:"105%"  
        },
        // for changing styling of Slider Thumb Circle
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

"use client";

import { PlanContext } from "@/context/PlanContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddToTodayBtn = ({ data }) => {
  const { savedPlans, setSavedPlans } = useContext(PlanContext);

  const handleAddPlan = () => {
    console.log("read btn", data);
    setSavedPlans([...savedPlans, data]);
    toast.success(`add save to ${data.name}`);
  };

  return (
    <button
      onClick={() => handleAddPlan()}
      className="flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-xs font-black uppercase text-black hover:bg-[#b0e200] transition-colors"
    >
      save to later
    </button>
  );
};

export default AddToTodayBtn;

"use client";

import { PlanContext } from "@/context/PlanContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddToTodayBtn = ({ data }) => {
const {todayPlans, setTodayPlans} = useContext(PlanContext);

const handleAddPlan= ()=>{

console.log("read btn", data);
setTodayPlans([...todayPlans,data])
toast.success(`add to ${data.name}`)
}

  return (
    <button
      onClick={() => handleAddPlan()}
      className="flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-xs font-black uppercase text-black hover:bg-[#b0e200] transition-colors"
    >
      Add to today's plan
    </button>
  );
};

export default AddToTodayBtn;

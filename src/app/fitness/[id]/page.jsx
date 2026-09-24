import PlanButtons from "@/components/fintenssDetails/planBtn";
import SaveForLaterBtn from "@/components/fintenssDetails/savedBtn";
import Image from "next/image";
import React from "react";

// API theke single data fetch korar function
const getData = async (id) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const FitnessDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getData(id);




  return (
    <div className="min-h-screen w-full bg-[#0b0c0e] p-6 md:p-12 text-white flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side Image */}
        <div className="w-full h-[450px] md:h-[550px] overflow-hidden rounded-3xl bg-[#14161d] border border-[#202228]">
          <Image
          width={740}
          height={600}
            src={data?.image || data?.img}
            alt={data?.name || data?.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Title & Description */}
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              {data?.name || data?.title}
            </h1>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              {data?.description ||
                "A compound exercise that targets muscles for effective strength training."}
            </p>

            {/* Muscle Groups Badges */}
            <div className="flex flex-wrap gap-2 my-4">
              {data?.muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-[11px] font-black uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Specifications Table Box */}
            <div className="rounded-2xl border border-[#202228] bg-[#14161d] p-4 my-6 text-xs divide-y divide-[#202228]">
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-gray-400 uppercase">
                  EQUIPMENT
                </span>
                <span className="font-bold text-white">
                  {data?.equipment || "N/A"}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-gray-400 uppercase">
                  DIFFICULTY
                </span>
                <span className="font-bold text-white">
                  {data?.difficulty || "Intermediate"}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-gray-400 uppercase">
                  SETS
                </span>
                <span className="font-bold text-white">
                  {data?.sets || "4"}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-gray-400 uppercase">
                  REPS
                </span>
                <span className="font-bold text-white">
                  {data?.reps || "6-8"}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-gray-400 uppercase">
                  DURATION
                </span>
                <span className="font-bold text-white">
                  {data?.duration} min
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-gray-400 uppercase">
                  CALORIES
                </span>
                <span className="font-bold text-white">
                  {data?.caloriesBurned} kcal
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="font-semibold text-gray-400 uppercase">
                  RATING
                </span>
                <span className="font-bold text-white">{data?.rating}</span>
              </div>
            </div>

            {/* Instructions */}
            {data?.instructions && (
              <div className="mb-8">
                <h3 className="text-xs font-black uppercase tracking-wider text-white mb-3">
                  INSTRUCTIONS
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-xs text-gray-400 leading-relaxed">
                  {Array.isArray(data?.instructions) ? (
                    data.instructions.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))
                  ) : (
                    <li>{data?.instructions}</li>
                  )}
                </ol>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <PlanButtons data={data}/>
            <SaveForLaterBtn data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessDetailsPage;

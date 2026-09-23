import React from 'react';
import FitnesCard from '@/components/sheard/fitnesCard';

const getDta =async()=>{
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();

  return data
}
const Datafitness = async() => {
const FitnesData =await getDta()




  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-[30px] font-bold text-white">THE LIBRARY</h2>
      <p className="text-white font-semibold">
        Twelve lifts covering every major muscle group.
      </p>
      <div className='grid md:grid-cols-3 gap-4'>
        {
        FitnesData.map(fitnes => <FitnesCard key={fitnes.id} fitnes={fitnes}></FitnesCard>)
        }
        </div>
    </div>
  );
};

export default Datafitness;

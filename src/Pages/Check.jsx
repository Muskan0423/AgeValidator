import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import './DatePicker.css'; 
import { useNavigate } from 'react-router-dom';

const Check = () => {
    const navigate=useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate,"startdate");
  
  const handleCheck=()=>
  {
const BirthDate=new Date(startDate)
const TodayDate=new Date()
let AgeYear=TodayDate.getFullYear()-BirthDate.getFullYear()
console.log(AgeYear,"age");
if(AgeYear === 18 || AgeYear >18 )
{
    navigate("/result",{state:AgeYear})
}
else

    console.log(startDate,"startdate");
  }

  return (
    <div className="container">
      <div className="content ">
        <h1 className='text-5xl text-white font-bold'> Find Out If You are eligible to use Our Service</h1>
        <h3 className='p-6 text-3xl text-white font-semibold'>What is your Date of Birth?</h3>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <button type="button" onClick={handleCheck} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium  text-sm px-5 py-2.5 text-center  mb-2">Check</button>
      </div>
    </div>
  );
}

export default Check;

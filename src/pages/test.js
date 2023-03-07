import React, { useState } from "react";




export default function test() {
  const [startDate, setStartDate] = useState();
  console.log(startDate)
  return (
    <>
    <h1>Your Select: {startDate}</h1>
    <input type='date' onChange={(e)=>setStartDate(e.target.value)} />
    </>
    
  )
}



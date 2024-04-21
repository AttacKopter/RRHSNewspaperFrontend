import { useState, useEffect } from "react"

function DayComponent() { 
  const [currentDay, setCurrentDay] = useState("A")

  return (
    <>
      <h3>{`Today is an: ${currentDay} day`}</h3>
    </>
  )
}

export default DayComponent;

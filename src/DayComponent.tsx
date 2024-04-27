import { useState, useEffect } from "react"

function DayComponent() {
    const [currentDay, setCurrentDay] = useState("A");

    useEffect(() => {
        setCurrentDay("B");
    }, []);


  return (
    <>
      <h3>{`Today is an: ${currentDay} day`}</h3>
    </>
  )
}

export default DayComponent;

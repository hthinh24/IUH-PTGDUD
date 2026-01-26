import React, { use, useEffect, useState } from 'react'

const App = () => {

  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0
  })

  useEffect(() => {

    const interval = setInterval(() => {
      setTime((prevTime) => {
        let newSecond = prevTime.second + 1
        let newMinute = prevTime.minute
        let newHour = prevTime.hour
        
        if (newSecond >= 60) {
          newSecond = 0
          newMinute += 1
        }

        if (newMinute >= 60) {
          newMinute = 0
          newHour += 1
        }

        if (newHour >= 24) {
          newHour = 0
        }

        return {
          second: newSecond,
          minute: newMinute,
          hour: newHour,
        }
      })

    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>Now: {time.hour}:{time.minute}:{time.second}</div>
  )
}

export default App
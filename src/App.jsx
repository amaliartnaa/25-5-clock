import { useState, useRef, useEffect } from 'react'
import BreakControl from './components/BreakControl'
import SessionControl from './components/SessionControl'
import Timer from './components/Timer'
import Controls from './components/Controls'

export default function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState(1500)
  const [timerLabel, setTimerLabel] = useState('Session')
  const [isRunning, setIsRunning] = useState(false)
  const timerId = useRef(null)

  const decrementBreak = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  const incrementBreak = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  const decrementSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength -1)
      if (!isRunning) {
        setTimeLeft((sessionLength -1) * 60)
      }
    }
  }

  const incrementSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
      if (!isRunning) {
        setTimeLeft((sessionLength + 1) * 60)
      }
    }
  }

  const startStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    clearInterval(timerId.current)
    setIsRunning(false)
    setBreakLength(5)
    setSessionLength(25)
    setTimerLabel('Session')
    setTimeLeft(1500)
    const beep = document.getElementById('beep')
    beep.onpause()
    beep.currentTime = 0
  }

  useEffect(() => {
    if (!isRunning) {
      timerId.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            const beep = document.getElementById('beep')
            beep.onplay()
            if (!timerLabel === 'Session') {
              setTimerLabel('Break')
              return breakLength * 60
            } else {
              setTimerLabel('Session')
              return sessionLength * 60
            }
          }
          return prev -1
        })
      }, 1000)
    } else {
      clearInterval(timerId.current)
    }
    return () => clearInterval(timerId.current)
  }, [isRunning, timerLabel, breakLength, sessionLength])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">25 + 5 Clock</h1>
      <div className="flex space-x-8">
        <BreakControl 
          breakLength={breakLength}
          decrementBreak={decrementBreak}
          incrementBreak={incrementBreak}
        />
        <SessionControl 
        sessionLength={sessionLength} 
        decrementSession={decrementSession} incrementSession={incrementSession} />
        
      </div>
      <Timer 
        timerLabel={timerLabel}
        timeLeft={formatTime(timeLeft)}
      />
      <Controls 
        startStop={startStop}
        reset={reset} />
    </div>
  )
}



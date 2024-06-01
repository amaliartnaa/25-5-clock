import PropTypes from 'prop-types'

const Timer = ({ timerLabel, timeLeft }) => {
  return (
    <div className="text-center">
      <div id="timer-label" className="text-2xl">{timerLabel}</div>
      <div id="time-left" className="text-4xl">{timeLeft}</div>
    </div>
  )
}

Timer.propTypes = {
  timerLabel: PropTypes.string.isRequired,
  timeLeft: PropTypes.number.isRequired
}

Timer.defaultProps = {

}

export default Timer


import PropTypes from 'prop-types'

const SessionControl = ({ sessionLength, decrementSession, incrementSession }) => {
  return (
    <div className="text-center">
      <div id="session-label" className="text-xl font-bold">Session Length</div>
      <div className="flex justify-center items-center">
        <button id="session-decrement" onClick={decrementSession} className="bg-blue-500 text-white p-4 rounded-full m-6">
          -
        </button>
        <div className="">{sessionLength}</div>
        <button id="session-increment" onClick={incrementSession} className="bg-blue-500 text-white p-4 rounded-full m-6">
          +
        </button>
      </div>
    </div>
  )
}

SessionControl.propTypes  = {
  sessionLength: PropTypes.number.isRequired,
  decrementSession: PropTypes.func,
  incrementSession: PropTypes.func
}

SessionControl.defaultProps = {
  sessionLength: 25,
  decrementSession: () => {},
  incrementSession: () => {}
}

export default SessionControl

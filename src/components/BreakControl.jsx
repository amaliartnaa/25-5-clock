import PropTypes from 'prop-types'

const BreakControl = ({ breakLength, decrementBreak, incrementBreak }) => {
  return (
    <div className="text-center">
      <div id="break-label" className="text-xl font-bold">
        Break Length
      </div>
      <div className="flex justify-center items-center">
        <button id="break-decrement" onClick={decrementBreak} className="bg-blue-500 text-white p-4 rounded-full m-6">
          -
        </button>
        <div id="break-length" className="">{breakLength}</div>
        <button id="break-increment" onClick={incrementBreak} className="bg-blue-500 text-white p-4 rounded-full m-6">
          +
        </button>
      </div>
    </div>
  )
}

BreakControl.propTypes = {
  breakLength: PropTypes.number.isRequired,
  decrementBreak: PropTypes.func,
  incrementBreak: PropTypes.func
}

BreakControl.defaultProps = {
  breakLength: 5,
  decrementBreak: () => {},
  incrementBreak: () => {}
}

export default BreakControl;

import PropTypes from 'prop-types'

const Controls = ({ startStop, reset }) => {
  return (
    <div className="text-center">
      <button id="start_stop" onClick={startStop} className="bg-green-500 text-white px-6 py-4 rounded-full m-6">
        Start
      </button>
      <button id="reset" onClick={reset} className="bg-red-500 text-white px-6 py-4 rounded-full m-6">
        Reset
      </button>
      <audio src=""></audio>
    </div>
  )
}

Controls.propTypes = {
  startStop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

export default Controls;

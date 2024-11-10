const ProgressBar = ({ progress }) => {
  // Define an array of colors to randomly choose from for the progress bar
  const colors = [
    'rgb(255, 214, 161)', // Light yellow
    'rgb(255, 175, 163)', // Light red
    'rgb(108, 115, 148)', // Blueish
    'rgb(141, 181, 145)'  // Greenish
  ]

  // Randomly select one color from the colors array
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className="outer-bar"> {/* Container for the progress bar */}
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: randomColor }} // Set width and color dynamically based on progress
      ></div>
    </div>
  )
}

export default ProgressBar

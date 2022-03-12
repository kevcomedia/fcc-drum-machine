const Display = ({ label, className }) => {
  return (
    <div
      className={`${className} flex justify-center items-center bg-stone-700 text-white shadow-inner shadow-stone-900 [text-shadow:0_0_0.25rem_white]`}
      id="display"
    >
      {label}
    </div>
  )
}

export default Display

const Button = ({ label, className }) => {
  return (
    <button
      className={`${className} bg-green-500 hover:bg-green-400 text-lg font-bold p-2 aspect-square border border-green-900 rounded shadow-button shadow-green-900 active:bg-yellow-500 active:border-yellow-900 active:translate-y-2 active:shadow-none`}
      type="button"
    >
      {label}
    </button>
  )
}

Button.defaultProps = {
  className: '',
}

export default Button

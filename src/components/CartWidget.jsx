function Button ({text, styles}) {
  return (
    <button className={`px-4 rounded ${styles}`}>
      {text}
    </button>
  )
}
export default Button
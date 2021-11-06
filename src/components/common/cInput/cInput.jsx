function CInput({className, ...params}) {
  return (
    <input {...params} type="text" className={`form-control ${className}`} />
  )
}

export default CInput;
function Form({isFormVisible, headerText, onClose, children}) {
  if (!isFormVisible) {
    return null;
  }

  return (
    <div className="form-modal">
      <div className="form-modal__wrapper">
        <div className="form-modal__header">
          {headerText}
        </div>
        {children}
      </div>
      <div onClick={onClose} className="form-modal__overlay" />
    </div>
  )
}

export default Form;
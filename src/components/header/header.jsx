function Header({onOpenForm}) {
  return (
    <div className="d-flex justify-content-between pt-4 header">
      <h1 className="header__title">
        Example page
      </h1>
      <button onClick={onOpenForm} className="btn btn-success">
        Create
      </button>
    </div>
  )
}

export default Header;
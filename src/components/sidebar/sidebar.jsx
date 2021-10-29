import logo from "@assets/img/logo.svg";

function Sidebar({sectionsList = []}) {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <img className="sidebar__logo-img" width="100px" src={logo} alt="logo" />
      </div>
      <ul className="sidebar__list">
        {sectionsList.map(({name}, index) => 
          <li key={index} className="sidebar__item">
            {name}
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Sidebar;
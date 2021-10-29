import { useState } from "react";
import useInput from "@hooks/useInput";

function Filters(params) {

  const [isSubFiltersVisible, setSubFiltersVisible] = useState();
  const inputName = useInput('');
  let subFilters = null;

  const toggleFilters = () => {
    setSubFiltersVisible((state) => !state)
  }

  if(isSubFiltersVisible) {
    subFilters = (
      <div className="row filters__row">
        <div className="col-4">
          <input type="text" className="form-control" />
        </div>
        <div className="col-4">
          <input type="text" className="form-control" />
        </div>
      </div>
    )
  }

  return (
    <div className="filters">
      <div className="row filters__row">
        <div className="col-4">
          <input {...inputName.bind} type="text" className="form-control" />
        </div>
        <div className="col-4">
          <input type="text" className="form-control" />
        </div>
        <div className="d-flex col-3">
          <button className="btn btn-primary filters__row-search-btn">Search</button>
          <button className="btn btn-danger filters__row-clear-btn">Clear</button>
          <button
            onClick={() => toggleFilters()}
            className="btn btn-light filters__row-show-btn"
          >
            {isSubFiltersVisible ? 'Все фильтры' : 'Скрыть фильтры'}
          </button>
        </div>
      </div>
      {subFilters}
    </div>
  )
}

export default Filters;
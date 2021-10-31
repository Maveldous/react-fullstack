import { useState } from "react";
import useInput from "@hooks/useInput";
// import useFilters from "./useFilters";

import CInput from "@components/common/cInput";
import Datepicker from "@components/common/datepicker";

function Filters(params) {

  const [isSubFiltersVisible, setSubFiltersVisible] = useState(false);

  const [date, setDate] = useState('');
  const inputSearch = useInput('');
  const inputCompany = useInput('');
  const inputRoad = useInput('');

  const subFilters = isSubFiltersVisible ? 
    <SubFilters
      companyInputBind={inputCompany.bind}
      roadInputBind={inputRoad.bind}
    />
    : null
  
  const toggleFilters = () => {
    setSubFiltersVisible((state) => !state)
  }

  return (
    <div className="filters">
      <div className="row filters__row">
        <div className="col-4 ps-0">
          <Datepicker onDayChange={(eventDate) => setDate(eventDate)}  />
        </div>
        <div className="col-4 ps-0">
          <CInput {...inputSearch.bind} type="text" placeholder="Enter query" />
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
      { subFilters }
    </div>
  )
}

function SubFilters({companyInputBind, roadInputBind}) {
  return (
    <div className="row filters__row">
      <div className="col-4 ps-0">
        <CInput {...companyInputBind} type="text" placeholder="Enter company" />
      </div>
      <div className="col-4 ps-0">
        <CInput {...roadInputBind} type="text" placeholder="Enter road" />
      </div>
    </div>
  )
}

export default Filters;
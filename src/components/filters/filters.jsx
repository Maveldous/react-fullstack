import { useState } from "react";
import useFilters from "./useFilters";

import CInput from "@components/common/cInput";
import Datepicker from "@components/common/datepicker";

function Filters(params) {

  const [isSubFiltersVisible, setSubFiltersVisible] = useState(false);

  const {formBinds, clearState} = useFilters({});

  const subFilters = isSubFiltersVisible && 
    <SubFilters
      companyInputBind={formBinds.inputCompany.bind}
      roadInputBind={formBinds.inputRoad.bind}
    />
  
  const toggleFilters = () => {
    setSubFiltersVisible((state) => !state)
  }

  return (
    <div className="filters">
      <div className="row filters__row">
        <div className="col-4 ps-0">
          <Datepicker {...formBinds.inputDate.bind}  />
        </div>
        <div className="col-4 ps-0">
          <CInput {...formBinds.inputSearch.bind} type="text" placeholder="Enter query" />
        </div>
        <div className="d-flex col-3">
          <button className="btn btn-primary filters__row-search-btn">Search</button>
          <button
            onClick={clearState}
            className="btn btn-danger filters__row-clear-btn"
          >
            Clear
          </button>
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
import { useState } from "react";
import useInput from "@hooks/useInput";

function useFilters({
  date: initialDate = '',
  search = '',
  company = '',
  road = '',
} = {}) {
  
  const [date, setDate] = useState(initialDate);
  const inputSearch = useInput(search);
  const inputCompany = useInput(company);
  const inputRoad = useInput(road);

  const setState = ({
    date = '',
    search = '',
    company = '',
    road = ''
  } = {}) => {
    setDate(date)
    inputSearch.setValue(search)
    inputCompany.setValue(company)
    inputRoad.setValue(road)
  }

  const getState = () => ({
      date,
      search: inputSearch.bind.value,
      company: inputCompany.bind.value,
      road: inputRoad.bind.value,
    })

  const clearState = () => {
    setState({});
  }

  return {
    formBinds: {
      inputDate: {
        bind: {value: date, onDayChange: (eventDate) => setDate(eventDate)}
      },
      inputSearch,
      inputCompany,
      inputRoad,
    },
    getState,
    setState,
    clearState,
  }
}

export default useFilters;
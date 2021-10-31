import { useEffect, useState } from "react";
import useInput from "@hooks/useInput";

function useFilters({date: initialDate, search, company, road}) {
  
  const [date, setDate] = useState(initialDate);
  const inputSearch = useInput(search);
  const inputCompany = useInput(company);
  const inputRoad = useInput(road);

  return {
    inputDate: {
      bind: {value: date, onDayChange: (eventDate) => setDate(eventDate)}
    },
    inputSearch,
    inputCompany,
    inputRoad,
  }
}

export default useFilters;
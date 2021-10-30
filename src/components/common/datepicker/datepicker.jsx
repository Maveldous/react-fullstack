import DayPicker from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';

function Datepicker(params) {

  return (
    <DayPicker {...params} selectedDays={new Date()} className="form-control" />
  )
}

export default Datepicker;
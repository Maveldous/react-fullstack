import { useState } from "react";

const useInput = (inputValue) => {
  const [value, setValue] = useState(inputValue);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return {
    bind: {
      value,
      onChange
    },
  }
}

export default useInput;
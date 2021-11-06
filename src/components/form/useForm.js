import { useEffect, useState } from "react";
import { v4 as makeId } from 'uuid';

const useForm = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((prevState) => {
      const newItem = {
        id: makeId(),
        name: '',
        number: '',
        value: ''
      };

      return [...prevState, newItem]
    })
  };

  const deleteItem = (index) => {
    setItems(prevState => {
      const beforeItems = prevState.slice(0, index);
      const afterItems = prevState.slice(index + 1);

      return [...beforeItems, ...afterItems];
    })
  };

  const setFieldValue = ({nameField, index, event}) => {
    setItems(prevState => {
      return prevState.map((item, itemIndex) => {
        if (index === itemIndex) {
          return {
            ...item,
            [nameField]: event.target.value,
          }
        }

        return item;
      })
    })
  }

  useEffect(() => addItem(), []);
  
  return {items, setFieldValue, addItem, deleteItem};
}

export default useForm;
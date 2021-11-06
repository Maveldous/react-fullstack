import CInput from "@components/common/cInput";
import useForm from "./useForm";

function Form(params) {

  const {items, setFieldValue, addItem, deleteItem} = useForm();

  const makeListenerField = (nameField, index) => event => setFieldValue({nameField, index, event});
  
  const preventDefault = (callback, ...args) => {
    return event => {
      event.preventDefault();
      callback(...args);
    }
  }

  const DeleteBtn = ({index}) => 
    items.length > 1 && 
    <button onClick={preventDefault(deleteItem, index)} className="example-form__delete-btn btn btn-danger">Delete</button>

  return (
    <form className="example-form">
      {
        items.map((item, index) => 
          <div key={item.id}>
            <CInput
              className="mb-3"
              placeholder="Enter name"
              value={item.name}
              onChange={makeListenerField('name', index)}
            />
            <CInput
              className="mb-3"
              placeholder="Enter number"
              value={item.number}
              onChange={makeListenerField('number', index)}
            />
            <CInput
              className="mb-3"
              placeholder="Enter value"
              value={item.value}
              onChange={makeListenerField('value', index)}
            />
            <DeleteBtn index={index} />
          </div>
        )
      }
      <button onClick={preventDefault(addItem)} className="btn btn-success">
        Create
      </button>
    </form>
  )
}

export default Form;
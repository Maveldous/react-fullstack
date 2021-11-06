import { useState } from "react";

import Filters from "@components/filters";
import Header from "@components/header";
import Form from "@components/form";
import FormModal from "@components/common/formModal";

function Page(params) {
  const [isFormVisible, setFormVisible] = useState(false);

  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);
 
  return (
    <div className="px-4">
      <Header onOpenForm={openForm}/>
      <Filters />
      <FormModal
        isFormVisible={isFormVisible}
        headerText="Create example"
        onClose={closeForm}
      >
        <Form />
      </FormModal>
    </div>
  )
}

export default Page;
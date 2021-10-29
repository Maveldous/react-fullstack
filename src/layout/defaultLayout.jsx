import React, {useRef} from "react";
import Sidebar from "../components/sidebar";

function DefaultLayout({children}) {
  const sections = useRef([
    {name: 'Dashboard'},
    {name: 'Orders'},
    {name: 'Carriages'},
    {name: 'Company'},
    {name: 'Controll'},
  ]);

  return (
    <>
      <Sidebar sectionsList={sections.current}/>
      <div className="application__wrapper">
        {children}
      </div>
    </>
  )
};

export default DefaultLayout;
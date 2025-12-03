import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
  const value = {
    // add your states or functions here
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;

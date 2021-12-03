import React, { Children, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface User {
  name: string;
  surname: string;
  num: number | undefined;
}

const initialState = {
  users: [
    {
      id: new Date().getTime().toString(),
      name: "Randeep",
      surname: "Singh",
      num: 1234,
    },
  ],
  
};

const GlobalContext = createContext<any>(initialState);

const GlobalProvider = ({ children }: any): any => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addData(value: User) {
    console.info("state user : ", value);
    dispatch({
      type: "addData",
      payload: value,
    });
  }

  function deleteData(id: number) {
    dispatch({
      type: "deleteData",
      payload: id,
    });
  }

  function editItem(value: any) {
    dispatch({
      type: "editItem",
      payload: value,
    });
  }

  return (
    <div>
      <GlobalContext.Provider
        value={{
          users: state.users,
          addData,
          editItem,
          deleteData,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalProvider;
export { GlobalContext };

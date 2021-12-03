import * as React from "react";
import Slot from "./slot";
import { Route, Routes } from "react-router-dom";
import Form from "./form";
import GlobalProvider from "./context/GlobalState";


import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Time slots</h1>

      <Routes>
        <Route path="/" element={<Slot></Slot>}></Route>
      </Routes>

      <GlobalProvider>
        <Routes>
          <Route path="/form" element={<Form></Form>}></Route>
          
          
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;

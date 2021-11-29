import * as React from "react";
import Slot from "./slot";
import { Route, Routes } from "react-router-dom";
import Form from "./form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Time slots</h1>
      
      <Routes>
        <Route path="/" element={<Slot></Slot>}></Route>
      </Routes>

      <Routes>
        <Route path="/form" element={<Form></Form>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiSelectDropDown from "./components/MultiSelectDropDown";
import { optionList } from "./constants/OptionList";


function App() {
  return (
    <div className="App">
      <MultiSelectDropDown
        onChangeInputField={() => {}}
        optionList={optionList}
      />
    </div>
  );
}

export default App;

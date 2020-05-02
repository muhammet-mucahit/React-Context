import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  onButtonColorChange = (buttonColor) => {
    this.setState({
      buttonColor,
    });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onButtonColorChange={this.onButtonColorChange} />
          <ColorContext.Provider value={"yellow"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;

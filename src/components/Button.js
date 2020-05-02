import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

// Consume with Context Type
// class Button extends React.Component {
//   // contextType is constant, not any other name
//   static contextType = LanguageContext;
//   render() {
//     const text = this.context.language === "english" ? "Submit" : "Gönder";
//     return <button className="ui button primary">{text}</button>;
//   }
// }

// Consume with Consumer
class Button extends React.Component {
  // contextType is constant, not any other name
  static contextType = LanguageContext;
  render() {
    return (
      <ColorContext.Consumer>
        {(value) => (
          <button className={`ui button ${value}`}>
            <LanguageContext.Consumer>
              {(value) => (value.language === "english" ? "Submit" : "Gönder")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

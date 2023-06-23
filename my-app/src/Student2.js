import "./App.css";
import React from "react";

class Student2 extends React.Component {
  constructor() {
    super();
  }


  componentWillUnmount(){
    alert("componentWillUnmount Called")
  }

  render() {
    return (
      <div className="App">
        <h1>Student Component</h1>
      </div>
    );
  }
}

export default Student2;

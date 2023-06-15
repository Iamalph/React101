import React from "react";
class User5 extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "deshmukhsomesh777@gmail.com",
    };
  }

  render() {
    console.log("render method ", this.state.email);
    return (
      <div>
        <h1>User component: {this.state.email} </h1>
        <button onClick={() => this.setState({ email: "rajpatil@gmail.com" })}>
          Update email
        </button>
      </div>
    );
  }
}

export default User5;

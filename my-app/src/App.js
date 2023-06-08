// import "./App.css";
// import { User } from "./User";
// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World !</h1>
//       <User />
//     </div>
//   );
// }

// // using the component in the same file :
// // function User(){
// //   return (
// // <div>
// //       <h1>user component </h1>
// //   <p> i cant write any tag outside div if i want to than there should be root wrapping </p>
// //       </div>
// //   )
// // }

// export default App;

// class based example :

// import "./App.css";
// import  User  from "./User1";
// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World !</h1>
//       <User />
//     </div>
//   );
// }

// export default App;

// note : what if you want the class componet and app.js be in same file:

// import "./App.css";
// import React,{Component} from 'react';
// // import  User  from "./User1";
// function App() {
//   return (
//     <div className="App">
//       <h1> Hello World !</h1>
//       <User />
//     </div>
//   );
// }
//  class User extends Component{
//     render(){
//         return(
//             <h1> Hello from Class Based Component</h1>
//         )
//     }
// }
// export default App;

// note: Can we use component within a component ?
// => yes , there are two ways 1) {Apple()} 2) <Apple/>

// import './App.css'

// function App(){
//   function Apple(){
//     return (<div>Apple component</div>)
//   }

//   return (
//     <div className='App'>
// <h1> Hello World!</h1>
// <Apple />
// {Apple()}
//     </div>
//   )
// }

// export default App;

// video : 9: JSX with React.js

// import './App.css'
// import User from './User2'
// function App(){
//   return (
//     <div className='App'>
//       <h1>JSX!</h1>
//       <User />
//     </div>
//   )
// }

// export default App;

//video : 10: Click event and function in ReactJs
// import './App.css'

// function App(){
//   // let data = "deshmukh somesh"
// function apple()
// {
//   // data="peter";
//   alert(data)
// }

//   return(
//     <div className='App'>
//       <h1>{data}</h1>
//       {/* <button  onClick={apple}>Click Me</button> */}
//       {/* <button onClick={()=>alert("Hello, function called!")}>Click Me</button> */}
//        {/* <button onClick={apple}>Click Me</button> */}
//        {/* <button onClick={()=>apple()}>Click me </button> */}
//        </div>

//   )
// }

// export default App;

//video:11: State with functional component
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState("deshmkh");

//
//   function updateData()
//   {

//     setData(data1+"somesh");

//   }
//   console.log("------");
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(0);

//  let data1 = "Welcome to our website"
//   function updateData()
//   {

//     setData(data1+1);

//   }
//   console.log("------");
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }
// export default App;

// practice by myself:

// import './App.css'
// import {useState} from 'react'
// function App(){
// const [brand,setBrand] = useState('Ford')
// const [model,setModel] = useState('Mustang')
// const [year, setYear]=useState('1964')
// const [color, setColor] = useState('red');

//   function update(){
//     setBrand('Audi')
//     setModel('farari')
//     setYear('2023')
//     setColor('lightblue')

//   }
//   console.warn("----")
// return (
// <div className='App'>
// <h1>Multiple use states</h1>
// <p>I have {brand} car with model {model}, made in {year} and it's color is {color}.</p>
// <button onClick={update}>click me </button>
// </div>
// )
// }

// export default App;

// video : 12 : State with class component

// import React , {Component} from 'react';
// import './App.css'

// class App extends Component{

// constructor(){
// super();

// this.state = {data:"somesh"}
// }
// apple(){
//   this.setState({data:"deshmukh"})
// }

// render(){
//   return(
//     <div className='App'>
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>{this.apple()}}>click me </button>
//     </div>
//   )
// }

// }
// export default App;

// import React , {Component} from 'react';
// import './App.css'

// class App extends Component{

// constructor(){
// super();

// this.state = {data:1}
// }
// apple(){
//   this.setState({data:this.state.data+1})
// }

// render(){
//   return(
//     <div className='App'>
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>{this.apple()}}>click me </button>
//     </div>
//   )
// }

// }
// export default App;

// react: 13: props with functional componet

// import { useState } from "react";
// import "./App.css";

// import Student from './Student'

// function App() {
//   const [name,setName] = useState("deshmukh")
//  console.log(setName);
//   return (
//     <div className="App">
//       <h1>Props in React :)</h1>
//       <Student name= {name} />
//       {/* <Student name="raj" name1="patil" email= "deshmukhrajpatil.com" other={{address:'delhi',mobile:"111"}} />
//       <Student name="rj" name1="pat" email= "deshmukhpatil.com" other={{address:'Mumbai',mobile:"222"}} /> */}
//       <button onClick={()=>{setName("somesh")}}>Update Name</button>

//     </div>
//   );
// }

// export default App;

// react : 14: props with class component

// import { Component } from 'react';
// import './App.css'
// import Student1 from './Student1'

// class App extends Component{
//   constructor(){
//     super();
//     this.state={name: "deshmukh"}
//   }

//   apple(){
//     this.setState= ({name:"Somesh"})
//   }

//   render(){
//     return (
//       <div className="App">
//       <h1>Props in class component </h1>
//       <Student1 name={this.state.name} emailId="deshmukhsomesh777@gmail.com"/>
//       {/* <Student1 name="peter" emailId="rajpatilpeter@gmail.com"/> */}
//       {/* <button onClick={()=>this.setState({name:"Somesh"})}>click me</button>this code is working */}
//       {/* <button onClick={()=>{this.apple()}}>click me</button>  this code is not working*/}
//     </div>

//     )
//   }

// }

// export default App;

// video : 15 : Get input box value

// import './App.css'
// import React , {useState} from 'react';
// function App(){

//   const [data,setData] = useState(null)
//   const [print,setPrint] = useState(false)

//   function getData(val){
// console.warn(val.target.value);
// setData (val.target.value)
// setPrint(false);
//   }

//   return(
//     <div className='App'>
//       {
//         print?
//         <h1>{data}</h1>
//         :null
//       }
//          {/* <h3> {data}</h3> */}
//       {/* <h1>
//         Get input box value
//       </h1> */}

//       <input type='text' onChange={getData}/>
//    <button onClick={()=>setPrint(true)}>Print Data</button>
//     </div>
//   )
// }

// export default App;

// import Navbar from './Navbar'

// function App(){
//  return(
//   <div>
//     {/* <Navbar/> */}
//   </div>
//  )
// }

// export default App;

// video 15 notes making :

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);
//   function getData(val) {
//     console.warn(val.target.value);
//     setData(val.target.value);
//     setPrint(false);
//   }
//   // console.log(print);

//   return (
//     <div className="App">
//       {/* <h1>{data}</h1> */}
//       {print ? <h2>{data}</h2> : null}

//       <input type="text" onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print Data</button>
//     </div>
//   );
// }

// export default App;

// Q. can we send html inside the props?
/// yes , this.props.children for class component
// for functional component: this.children

// Q. How we got input field data , likewise can we also get the check box and radio button values?

// video  : 16: Hide and Show Element
// Make a div or any other element
// make state for hiding and show element
// make button
// update state on button click
// interview question

/// code using 2 buttons :
// import "./App.css";
// import React from "react";
// function App() {
//   const [status, setStatus] = React.useState(false);

//   return (
//     <div className="App">
//       {status ? <h1>hello</h1> : null}

//       <button onClick={() => setStatus(false)}>Hide</button>
//       <button onClick={() => setStatus(true)}>Show</button>

//     </div>
//   );
// }

// export default App;

// code using single button=> my way

// import "./App.css";
// import React from "react";
// function App() {
//   const [status, setStatus] = React.useState(false);

// function showorhide(){
//   if(status=== false){
//     setStatus(true);

//   }else{
//     setStatus(false)

//   }
// }

//   return (
//   <div className="App">
//     {
//       status?
//       <h1>hello friend!</h1>
//       :null
//     }
//       <button onClick={showorhide}>Click</button>
//     </div>
//   );
// }

// export default App;

/// sirs method to toggle
// import "./App.css";
// import React from "react";
// function App() {
//   const [status, setStatus] = React.useState(false);

//   return (
//     <div className="App">
//       {status ? <h1>hello</h1> : null}

//       {/* <button onClick={() => setStatus(false)}>Hide</button>
//       <button onClick={() => setStatus(true)}>Show</button> */}
//       <button onClick={()=>setStatus(!status)}>Click</button>
//     </div>
//   );
// }

// export default App;

// Q. do we use same method in the sense the procedure to hide and show ?
// or do we use css or some method to do it , as it affects the speed of rendering.

// video : 17: Handle Form | checkbox | input field | select
// Make HTML form
// Add some field
// Use state for field data
// Submit and control form
// intrview Question

// import './App.js';
// function App(){
//   return(
//     <div className='App'>
//       <h1>Handle Form in React</h1>
//         <form>

//         </form>

//     </div>
//   )
// }

// export default App;

// import './App.js';
// import Navbar from './Navbar.js'
// function App(){
//   return(
//     <div className='App'>
//      <Navbar />
//     </div>
//   )
// }

// export default App;

// video : 17: Basic Form code:
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInerest] = useState("");
//   function getForm(e) {
//     // console.log(e.cancelable);
//     console.warn(name, tnc, interest);
//     e.preventDefault();
//   }

//   return (
//     <div className="App">
//       <h1>Handle form in react</h1>

//       <form onSubmit={getForm}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           onChange={(e) => setName(e.target.value)}
//         ></input>
//         <br />
//         <br />
//         <select onChange={(e) => setInerest(e.target.value)}>
//           <option>Select Option</option>
//           <option>Marvel</option>
//           <option>DC</option>
//           <option>Hollywood</option>
//           <option>Bollywood</option>
//         </select>
//         <br />
//         <br />
//         <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
//         <span>Accept Terms and Conditions</span>
//         <br /> <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// q. how can we disable a field , on a button click or without a button click.

// video: 18: Conditional rendering | if Condition
// Make Component
// Use State
// Not Recommended Way for condition
// Corrent Way condition
// interview Question

//  import "./App.css"
// import Profile from "./Profile";
//  function App(){
//   return(
// <div className="App">

// <Profile/>
// </div>
//   )
//  }

//  export default App;

// video: 19: Basic Form validation
// => Make Component
// => Make HTML Form
// => Define States
// => Apply Validation
// => Interview Question

// import "./App.css";
// import Login from './Login'
// function App() {
//   return (
//     <div className="App">

//       <Login />
//     </div>
//   );
// }
// export default App;

// 20 : Pass Function as Props

import "./App.css";
import User4 from "./User4";
import Members from "./Members";
function App() {
  function getData() {
    alert("hello from app");
  }

  return (
    <div className="App">
      <h1>Pass function as Props</h1>
      <User4 data={getData}/>
      <User4 data={getData}/>
      <User4 data={getData}/>
      <User4 data={getData}/>
      <div style={{float:'right'}}>
      <Members data= {getData}/>
      </div>
      
    </div>
  );
}

export default App;

// Q. can we carete super componet i.e. compoent within componet.
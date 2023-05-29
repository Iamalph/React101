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

import { useState } from "react";
import "./App.css";

import Student from './Student'

function App() {
  const [name,setName] = useState("deshmukh")
 
  return (
    <div className="App">
      <h1>Props in React :)</h1>
      <Student name= {name} />
      {/* <Student name="raj" name1="patil" email= "deshmukhrajpatil.com" other={{address:'delhi',mobile:"111"}} />
      <Student name="rj" name1="pat" email= "deshmukhpatil.com" other={{address:'Mumbai',mobile:"222"}} /> */}
      <button onClick={()=>{setName("somesh")}}>Update Name</button>
      
    </div>
  );
}

export default App;

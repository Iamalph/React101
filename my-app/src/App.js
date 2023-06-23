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

// react: 13: props with functional component

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

// import "./App.css";
// import User4 from "./User4";
// import Members from "./Members";
// function App() {
//   function getData() {
//     alert("hello from app");
//   }

//   return (
//     <div className="App">
//       <h1>Pass function as Props</h1>
//       <User4 data={getData}/>
//       <User4 data={getData}/>
//       <User4 data={getData}/>
//       <User4 data={getData}/>
//       <div style={{float:'right'}}>
//       <Members data= {getData}/>
//       </div>

//     </div>
//   );
// }

// export default App;

// Q. can we carete super componet i.e. compoent within componet.

// video:20: Pass Functions as Props

// import './App.css';
// import User4  from './User4';

// function App(){
//   function getData(){
// alert("hello from app")
//   }
//   return(
// <div className='App'>
// <User4 data={getData}/>
// </div>
//   )
// }

// export default App;

// Q.  if our compoent is rendered on the window , we hide it and then show it ? will our life cycle start from first  or it will continue from where it left?
// ans is it will start from first

// video: 22 : Constructor Life Cycle Method
// => Why a contructor?
// => Why this is importatnt?
// => What we can do in this life cycle method?
// => interview Question

// import './App.css';
// import React  from 'react';

// class App extends React.Component{
//   constructor(){
//     super()
//     // console.warn("constructor")
//     this.state = {
//       data:"deshmukh"
//     }

//   }
//   render(){
//     // console.warn("render")
//     return(
//       <div className='App'>
//         <h1> Hi, This is my name : {this.state.data}</h1>
//       </div>
//     )
//   }
// }

// export default App;

///  can  we use props inside the constructor and note props come from parent component?
// kya hamare props constructor jab tak bane hui hote hai tab tak a chuke hote hai ya nahi?

// => yes inside constructor we can receive the props and even outside the construcotr.

// video : 23 : Render life Cycle method
// -> use of render method
// -> make class component
// -> use state and props with render
// -> interview question

// paraent component.
// import "./App.css";
// import User5 from "./User5";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("deshmukh");
//   // const [email1, setEmail] = useState("deshmukhsoemsh7777@gmail.com");
//   return (
//     <div className="App">
//       <h1>Render Method in React</h1>

//       <User5   />
//       {/* <button onClick={() => setName("somesh")}>Update Name</button> */}
//     </div>
//   );
// }

// export default App;

// Q. can there be more than one render method , or can we write a new render method with in render method?

// video: 24 : ComponentDidMount life cycle method in React js
// => Use of componentDidMount Method
// => make class component
// => No effect of state and props.
// => interview question

// Q. what is use of componentDidMount ?
// -> best example is , calling an api , setting up event listeners.

// Q.  Which one is called first render() or componentDidMount()?
//-> first render() method will be called and when our component is mounted (ie. inserted into the DOM) , componentDidMount will be called.

// Q. What is difference between compoentDidMount() and componentDidUpdate()?

//=> componentDidUpdate() is  invoked immediately after an update to component occures(props or state change).

// code:

// import "./App.css";
// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();

//     this.state={
//       name:"deshmukh somesh shivkumar"
//     }
//   }

//   componentDidMount(){
//     console.warn ("componentDidMount")

//   }

//   render() {
//     console.warn ("render")

//     return (
//       <div className="App">
//         <h1>ComponetDidMount : {this.state.name}</h1>
//         <button onClick={()=>this.setState({name:"rajpatil"})}>Update name </button>
//       </div>
//     );
//   }
// }

// export default App;

// Q. Can we update state in render() or componentDidMount() ?
// =>no we can't , every time rnder get called so it will take the state in infinite loop. as an solutoin use the componentDidMount
// we can use shouldComponentUpdate method to stop componnetDidupdate.

// video: 25: componentDidUpdate life cycle method in ReactJs
// -> Use of componentDidUpdate Method
// -> Make Class component.
// -> Use with state and props.
// -> Previous props and state.
//  => interview question

// import "./App.css";
// import React from "react";

// class App extends React.Component {
//   constructor() {

//     super();
//     console.warn("constructor");
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidUpdate(prevProps,prevState,snapshot) {

//     console.log();
//     console.warn("componentDidUpdate",prevState.count,this.state.count);
//     // this.setState({email:"rajpatil@gmail.com"})
//     if(this.state.count<10){
//       this.setState({count:this.state.count+1})

//     }
//   }

//   render() {

//     console.warn("render");
//     return (
//       <div className="App">
//         <h1>Component Did Update : {this.state.count}</h1>
//         <button onClick={() => this.setState({ count:  1 })}>
//           Update state
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// Q. Can we call api in componentDidUpdate()?
// => yes we can , if you want to call inside a condition. otherwise  you should use componentDidMount();

// video: 26: shouldComponentUpdate life cycle method
// -> when shouldComponentUpdate called and Use.
// -> it can stop rendering
// -> Use with state and props
// -> interview question.

// import "./App.css";
// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   shouldComponentUpdate() {
//     console.warn("shouldComponentUpdate", this.state.count);
//     if (this.state.count > 5 && this.state.count < 10) {
//       return true;
//     }
//     return false;
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>shouldCompoentUpdate {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           update count
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
/// Q. which method is called first componentDidUpdate or shouldCompoentUpdate?
// => shouldComponetUpdate will be called first and if this method returns  true then only componentDidUpdate will be called.


// video: 27: componentWillUnmount life cycle method:
// -> when componentWillUnmount called.
// -> Example of component will unmount .
// -> use of component will unmount
// -> interview question



// import './App.css';
// import React from 'react';
// import Student2 from './Student2';
// class App extends React.Component{
//   constructor(){
//     super();

//     this.state = {
//       show:true
//     }
//   }

 

//   render(){
//     return(
//       <div className='App'>
//         {/* <h1>componentWillUnmount()</h1> */}
//      {this.state.show?<Student2/>:<h1>child compnent removed</h1>}  
//         <button onClick={()=>this.setState({show:!this.state.show})} >Toggole Child component</button>
//       </div>
//     )
//   }
// }

// export default App;




// Q.when is componentWillUnmount called , is it called just after the dom element disappers or before the dom element disappers?
// => it is called before the element is removed from dom

// video : 28: Hooks in ReactJs
// -> What are hooks in ReactJs
// -> How to use them 
// -> Example of React Hooks with useState
// -> interview question.

/// note : with Hook, we can use class component features in functional components such as state, life cycle, pure component, etc.

// import './App.css';
// import React,{useState} from 'react'
// function App(){

//   const [data,setData] = useState("somesh");
//   return(
//     <div className='App'>
//       <h1> Hello friends this is :{data}</h1>
// <button onClick={()=> setData("deshmukh")}>Click here</button>
//     </div>
//   )
// }

// export default App;

// Q. Can we use these hooks in class components?
// => we can't do this
// 29 : useEffect Hook in ReactJs

//-> What is useEffect
// -> How to use useEffect
// -> Example useEffect
// -> useEffect with state and props
// -> interview question

// import './App.css';
// import React, {useEffect,useState} from 'react'
// function App(){
// const [count,setCount] = useState(0);
//   useEffect(()=>{
//   console.warn("useEffect")
//   })
//   useEffect(()=>{
//     console.warn("useEffect")
//     })
//   return(
//     <div className='App'>
//       <h1>useEffect in React {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Update counter</button>
//     </div>
//   )
// }

// export default App;


// Q. can we define a function inside the useEffect? 
// or 
// Q. can we put useEffect inside a function?


// video: 30: useEffect with condition || part 2|| like component did mount
// -> What is useEffect
// -> useEffect with specific state
// -> useEffect with specific props
// -> interview question

// import './App.css';
// import React, {useEffect,useState} from 'react';
// function App(){
// const [data,setData] = useState(10);
// const [count,setCount] = useState(100)
//   useEffect(()=>{
//     console.warn("called with data state")
//   },[data])

//   useEffect(()=>{
//     alert("count is "+ count)
//   },[count])
//   return(
//     <div className='App'>
//       <h1>count: {count}</h1>
//       <h2> data: {data}</h2>
//       <button onClick={()=>{setCount(count+1)}}>update Counter</button>
//       <button onClick={()=>{setData(data+1)}}>update data</button>
//     </div>
//   )
// }

// export default App;


// with props

// import './App.css';
// import React, {useEffect,useState} from 'react';
// function App(){
// const [data,setData] = useState(10);
// const [count,setCount] = useState(100)
//   useEffect(()=>{
//     console.warn("called with data state")
//   },[data])

//   useEffect(()=>{
//     alert("count is "+ count)
//   },[count])
//   return(
//     <div className='App'>
//       <h1>count: {count}</h1>
//       <h2> data: {data}</h2>
//       <button onClick={()=>{setCount(count+1)}}>update Counter</button>
//       <button onClick={()=>{setData(data+1)}}>update data</button>
//     </div>
//   )
// }

// export default App;


// practice: should component update:
import './App.css';
import React from 'react';
import Card from './Card';

class App extends React.Component{

  constructor(){
    super();
    this.state= {
    bgColor:'red',
    count:0,
    }
  }


  getRandomColor = ()=>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
      color += letters[Math.floor(Math.random() *16)];
    }
    return color;
  }



  handleClick = ()=>{
    this.setState((prevState)=>({
      bgColor:this.getRandomColor(),
      count:prevState.count+1
    }))
  }

  componentDidMount(){
    document.body.style.backgroundColor = this.state.bgColor;
    console.log('called')
  }

  componentDidUpdate(){
    document.body.style.backgroundColor = this.state.bgColor;
    console.log('called1')
  }

  render(){
    return(
      // <div className='App' style={{backgroundColor:this.state.bgColor}}>
        <div className='App'>
        <Card/>
      </div>
    )
  }
}

export default App;




















/////////////////////////jumped>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// video: 31: Style in ReactJs
// How many ways we have for style in React.js
// Use the normal stylesheet
// Style with the variable or inline style
//Css with module
// interview question.

// there are 3 types of style they are
// 1) one css file ex: App.css
// 2) inline style: {} first for jsx and {} for object. in here camel case is used for property name ex:
// background-color is written as backgroundColor:
//3) css with module

// import "./App.css";
// import "./style.css";
// import style from "./custom.module.css";
// function App() {
//   return (
//     <div className="App">
//       <h1 className="primary">Style type 1 in React js</h1>
//       <h1 style={{ color: "red", backgroundColor: "black" }}>
//         {" "}
//         Style type 2 in React js
//       </h1>
//       <h1 className={style.success}>3 rd way of styling usign module file</h1>
//     </div>
//   );
// }
// export default App;

// Q. can we use modular css and normal css combinely or not?

// video : 32 : Install Bootstrap
// -> What is Bootstrap
// -> Install Bootstrap
// -> Use and register bootstrap library
// -> Example with bootstrap Component
// -> interview question

// you can visit : react-bootstrap website and click on getstrated.
// command to install bootstrap : npm i react-bootstrap bootstrap

// don't use <link/> : it is cdn link, instaed make use of CSS
// import 'bootstrap/dist/css/bootstrap.min.css'; put this one in index.js

// import "./App.css";
// import {Button} from 'react-bootstrap';
// function App() {
//   return <div className="App">
//     <h1> install Bootstrap</h1>
//     <Button onClick={()=>alert("hi")}> Click on this </Button>
//     {/* you can go in components-> Buttons and make use of them in various ways */}
//   </div>;
// }

// export default App;

// video: 33: Array Listing with Map function:(Important) interview oriented.
// Handle Array with list
// -> Make an array
// -> Why use map function,  not for loop
// -> make list with an array
// -> Make list with an array of objects
// -> interview question
/*
import "./App.css";
import React from "react";
function App() {
//   const students = ["Anamika", "Sam", "Peter"];
  // map Looping
//   students.map((item) => {
//     console.warn("My name is", item);
//   });

//   for (let i = 0; i < students.length; i++) {
//     console.log("using for loop", students[i]);
//   }

  // the reson why we use map but not for loop is map
  //supports in return statement but for loop doesn't support
  //in return statement.

  const students = [
    {name:"deshmukh",email:"deshmukhsomesh777@gmail.com", contact:"000"},
    {name:"raj", email:"rajpatil@gmail.com", contact:"111"} 
  ]
  return (
    <div className="App">
      <h1>Handle Array with list</h1>
      <table border="1">
        <tbody  >
        <tr>
            <td>S.no</td>
            <td>Name</td> 
            <td>Email</td>
            <td>Contact</td>

             </tr>
      {students.map((data,i) => (
        // <div>
        //     <p>{data.contact},{data.email},{data.name}</p>
        // <h1>Name is:{data.name}</h1>,
        // <h2>Email is : {data.email}</h2>
        // </div>
        <tr key={i}>
            <td>{i+1}</td>
            <td>{data.name}</td> 
            <td>{data.email}</td>
            <td>{data.contact}</td>

             </tr>
      ))}
</tbody>
</table>

      
    </div>
  );
}

export default App;
*/
// 34 : List with Bootstrap Table
// List with Bootstrap and Unique Key
// => Make list from array
// => What is Unique key in loop?
// => install Bootstrap
// => use Bootstrap table with loop
// => interview Questionion

// import './App.css';
// import React from 'react';
// import {Table} from 'react-bootstrap'
// function App(){
//     const users = [
//         {name:'Somesh',email:'somesh@gmail.com',contact:'111'},
//         {name:'raj',email:'somesh@gmail.com',contact:'222'},
//         {name:'Patil',email:'somesh@gmail.com',contact:'111'},
//         {name:'rohit',email:'somesh@gmail.com',contact:'110'},
//     ]

//     return(
//         <div className='App'>
//             <h1> List With Bootstrap Table</h1>
//             <Table striped bordered hover variant='dark'>
//                 <tbody>
//             <tr>
//                 <td>S.no</td>
//                     <td>Name</td>
//                     <td>Email</td>
//                     <td>Contact</td>
//                  </tr>
//             {
//                 users.map((item,i)=>
//                 item.contact ==='111'?
//                  <tr key={i}>
//                     <td>{i+1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.contact}</td>
//                  </tr>:null
//                 )
//             }
//             </tbody>
//             </Table>
//         </div>
//     )
// }

// export default App;

// q. How can we show s .no?

// React Router v6 tutorial : 1# getting started | installation
// -> Install Router router verson
// => Setup Wrapper for React Router
// -> Make some component
// -> Open compoents as Page

// import './App.css'
// import {BrowserRouter , Routes,Route} from 'react-router-dom'
// import Home from './component/Home';
// import About from './component/About'
// function App(){
//     return(
// <div className='App'>
//     <BrowserRouter>
//     <Routes>
//     {/* <Route path="/home" element={<h1>Home Page</h1>}/> */}
//     <Route path="/" element={<Home/>}/>
//     <Route path="/about" element={<About/>} />
//     </Routes>

//     </BrowserRouter>

// </div>

//     )
// }

// export default App;

// video: 2: Links , NavBar, anchor Tag

// -> Make Simple Link for Router
// -> Make common component for links
// -> why we can't use anchor tag for links

// import './App.css';
// import {BrowserRouter, Routes,Route, Link} from 'react-router-dom';
// import Home from './component/Home'
// import About from './component/About'
// import NavBar  from './component/NavBar';
// function App(){
//     return(
//         <div className='App'>
//         <BrowserRouter>
//         <NavBar/>
//         <Routes>
//             <Route path='/' element={<Home/>} />
//             <Route path='/about' element={<About/>}/>
//         </Routes>
//         </BrowserRouter>
//         </div>

//     )
// }

// export default App;

// video: 3 : 404 Page not  found and redirect

// import './App.css';
// import { BrowserRouter, Routes,Route,Link ,Navigate} from 'react-router-dom';
// import Home from './component/Home'
// import About from './component/About'
// import Page404 from './component/Page404'
// import NavBar from './component/NavBar';

// function App(){
//     return(
//         <div>
// <div className='App'>
//     <BrowserRouter>
//     <NavBar/>
//     <NavBar/>
//     <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/about" element={<About/>}></Route>
//         {/* <Route path="*" element={<Page404/>}></Route> */}
//         <Route path="/*" element={<Navigate to="/" />}>Co</Route>
//     </Routes>
//     </BrowserRouter>

// </div>
//         </div>
//     )
// }

// export default App;

// video : 4 : dynamic Routing with params

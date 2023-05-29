import './App.css';
import {User}  from './User';
function App() {
  return (
  


<div className='App'> 
<h1> Hello World !</h1>
<User />

</div>    
   
  );
}

// using the component in the same file :
// function User(){
//   return (
// <div>
//       <h1>user component </h1>
//   <p> i cant write any tag outside div if i want to than there should be root wrapping </p>
//       </div>
//   )
// }

export default App;

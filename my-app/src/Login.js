import { useState } from "react";

function Login() {

const [user,setUser] = useState("")
const [password, setPassword] = useState("")
const [userIdErr,setUserIdErr] = useState(false);
const [passErr,setPassErr] = useState(false);

  function loginHandle(e){
    // alert("button working")
    if(user.length <3 || password.length<3){
      alert("Enter correct credentials")
    }else{
      alert("all good :)")
    }
e.preventDefault();
  }

  //userHandler
  function userHandler(e){
// console.warn(e.target.value);
let item = e.target.value;
// putting validation
if(item.length <3 && item.length>0){
// console.warn("invalid")
  setUserIdErr(true);
}
else{
  setUserIdErr(false);
}

setUser(item);
}
// password handler
function passHandler(e){
let item = e.target.value;
if(item.length <3 && item.length>0 ){
  // console.log("invalid password");
  setPassErr(true);
}else{
 setPassErr(false);
}
setPassword(item);
}

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
      <input type="text" placeholder="Enter UserId" onChange={userHandler}/>{userIdErr?<span>Id invalid</span>:null}
      <br /> <br />
      <input type="password" placeholder="Enter password"  onChange={passHandler}/>{passErr?<span> Password invalid</span>:null}
      <br /> <br />
      <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;

// data collection 
/*import React,{useState} from 'react';


function Profile()
{
    const[loggedIn, setLoggedIn]=useState(false)

    /// not recommended procedure:
    if(loggedIn){
        return(
            <div>
                <h1> Welcome deshmukh</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Welcom guest </h1>
            </div>
        )
    }
    
// unnecessary these many return statements are not needed in React.
}

export default Profile;
*/

// import { useState } from "react";

// function Profile() {
//   const [loggedIn, setLoggedIn] = useState("");
//   return (
//     <div>
//       {/* simple way to use if else */}
//       {/* 1,2,3 */}
//       {
//         // loggedIn?"Welcome Deshmukh":"Welcome guest"
//         loggedIn == 1 ? (
//           <h1>Welcome User 1</h1>
//         ) : loggedIn == 2 ? (
//           <h2>Welcome User 2</h2>
//         ) : loggedIn === 3 ? (
//           <h3>Welcome User 3</h3>
//         ) : (
//           <h2>No body is welcomed!</h2>
//         )
//       }
//     </div>
//   );
// }

// export default Profile;

// q. insted of state if we would have taken normal variable loggedIn and we assigned value 1, 2 and 3 . Will it work or not?
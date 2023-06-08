import React from 'react';
function User4(props){

return (
    <div>
        <h1>User Componet</h1>
        {/* <button onClick={()=>props.data()}>Call data function</button> */}
        <button onClick={props.data}>Call data function</button>
    </div>
)
}

export default User4;

// now question arises , We could have created getData component  with in this user4 component only why to create it in differnet file and then call it in user4 file
//  => we can create but , what happens is sometime child components are so many 

// what happens is some componets are used again and again in different child compoents so its good to crate the componet in parant compoent and then use it in child compoent insted of creating the same component in each and every child component.

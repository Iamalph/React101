import React from 'react';

class Student2 extends React.Component{

  constructor(){
    super()
  }

  componentWillUnmount(){
   alert('Component Removed successfully')
  }
  render(){
    return(
      <div>
        <h1>Student Component</h1>
      </div>
    )
  }
}

export default Student2;
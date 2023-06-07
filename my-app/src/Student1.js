// 14 Props in class Component 
import React,{Component} from 'react';

class Student1 extends Component{



    render(){
        console.log(this.props);
       
        return(
    <div style={{backgroundColor:"orange", height:"45vh",margin:"10px"}}>
                <h1>Student: {this.props.name}</h1>
                <h3>Email: {this.props.emailId}</h3>
                
            </div>
             
           
        )
    }
}

export default Student1;
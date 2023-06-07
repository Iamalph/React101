function Student(props) {
    console.log(props.name);
  return (
    <div style={{backgroundColor:"skyblue", margin:10}}>
      {/* <h1>Hello  i am {props.name} and my fathers name is {props.name1}</h1>
      <h2>and our email id's are : {props.email}</h2> */}
      <h1>{props.name}</h1>

    </div>
  );
}

export default Student;

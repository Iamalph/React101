import {Link} from 'react-router-dom'
let About = ()=>{
    return(
        <>
        <h1>About page</h1>
        <p>This is home page of awesome App</p>
        <p>And here we are learning about router</p>
        <Link to="/">Go to Home page</Link>
        </>
    )
}
export default About;
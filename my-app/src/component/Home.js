import {Link} from 'react-router-dom';

let Home = ()=>{
    return(
        <>
        <h1>Home page</h1>
        <p>This is home page of awesome App</p>
        <p>And here we are learning about router</p>
        <Link to="/about">Go to about page</Link>
        </>
    )
}

export default Home ;
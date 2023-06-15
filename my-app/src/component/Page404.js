import {Link} from 'react-router-dom'
let Page404  = ()=>{
    return(
        <div>
            <h1>Error404</h1>
            <p> This request is not valid</p>
            <Link to="/"> go to home page</Link>
        </div>
    )
}
export default Page404;
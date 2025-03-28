import { Link } from 'react-router-dom'
import img from './assets/404.jpg'
export default function Page() {

    return(
        <div>
        <div className="wrap" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={img}></img>
           <p> Page not found </p>
            <Link to={'/'}>Back to Home</Link>
        </div>
        </div>
    )
}
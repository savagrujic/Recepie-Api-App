import { useEffect } from "react"
import { useParams, useLocation,useNavigate} from "react-router-dom"
import './product.css'
export default function Product() {
    const {state} = useLocation()
    const {id} = useParams()
    const {food} = state
    const meal = food[id]
    const navigate = useNavigate()
    useEffect(() => {
        console.log(meal)
    })
    return(
    <>
    <p onClick={() => navigate('/')}>Go Back</p>
    <div className="wrapper">
    <div>
    <p className="title">{meal.strMeal}</p>
    <p className="tags">#{meal.strTags}</p>

    <img src={meal.strMealThumb} className="imgthumb" />
    </div> 
    <p className="desc">{meal.strInstructions}</p>
  
    
    </div>
    </>
    )
}
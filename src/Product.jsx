import { useEffect, useState } from "react"
import { useParams, useLocation,useNavigate} from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import './product.css'
export default function Product() {
    const {state} = useLocation()
    const {id} = useParams()
    const {food} = state
    const meal = food[id]
    const navigate = useNavigate()
    const [ingrident, setIngridient] = useState([])
        useEffect(() => {
            document.documentElement.scrollTop = 0
            const temp = []
            for(let i = 1; i <= 20; i++) {
             const ing =  meal[`strIngredient${i}`]
             if(ing) {
                temp.push(ing)
             }

               

            }
            setIngridient(temp)
     
     //   console.log(ingrident)


    },[meal])
    return(
    <>
    <FaArrowLeftLong className="back" onClick={() => navigate('/')} />
    <div className="wrapper">
    <div>
    <p className="title">{meal.strMeal}</p>
    <p className="tags">#{meal.strTags}</p>

    <img src={meal.strMealThumb} className="imgthumb" />
    </div> 
    <p className="desc">{meal.strInstructions}</p>

   
  
    
    </div>
    <div className="ingdiv">
        <h1>Ingridients</h1>
    {ingrident.map((item) => (
        <div>
            
        <p className="ing">{item}</p>
        </div>
       
    ))}
     </div>
    </>
    )
}
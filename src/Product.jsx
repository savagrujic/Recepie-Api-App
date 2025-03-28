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
    const [tags,setTags] = useState([])
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
     
       console.log(meal)
        let a = meal.strTags
        if(a) {
        let temptags = a.split(',')
        
        setTags(temptags)
        }       

    },[meal])
    return(
    <>
    <FaArrowLeftLong className="back" onClick={() => navigate('/')} />
    <div className="wrapper">
    <p className="title">{meal.strMeal}</p>
    <div style={{display: 'flex'}}>
    {meal.strTags === null ? ( <p className="tags">No Tags</p>): tags.map((item) => (<p className="tags">#{item}</p>))}
    </div>
    <div className="container1">
  

    <img src={meal.strMealThumb} className="imgthumb" />

    <div className="ingdiv">
        <h1>Ingridients</h1>
    {ingrident.map((item) => (
        <div>
            
        <p className="ing">{item}</p>
        </div>
       
    ))}
     </div>
    </div> 


     <div className="desc">
    <h3>Category: {meal.strCategory}</h3>
    <h3>Country Origin: {meal.strArea}</h3>
    <p className="desc">{meal.strInstructions}</p>
    </div>
   
  
    
    </div>
   
    </>
    )
}
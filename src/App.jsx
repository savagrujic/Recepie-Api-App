import { useEffect, useState } from "react";
import './home.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Recepie() {

  const [food, setFood] = useState([])
  const [searchpie, setSearchpie] = useState('')
  const navigate = useNavigate()
  let link = '/product/'


  useEffect(() => {


    const FetchData = async () => {
      try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Pie`)
      const data = await response.json()
     setFood(data.meals)
      }
      catch(error) {
        console.error(error)
      }
    }
    FetchData()


  }, [])


  async function Search(searchpie) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchpie}`)
      const data = await response.json()
     setFood(data.meals)

      }
      catch(error) {
        console.error(error)
      }
  }



  function HandleProduct(id) {


    navigate('/product/' + id, {state : {food : food}})
  }

  function HandlePieSearch(e) {

    e.preventDefault()
    Search(searchpie)
   setSearchpie('')

  }


  return (
    <>
    <div className="container">
    <form onSubmit={HandlePieSearch}>
      <input 
      value={searchpie}
      onChange={(e) => setSearchpie(e.target.value)}
      placeholder="Enter Recepie you want to search"
      
      />
      <button>Search</button>
    </form>
    <div className="wrapper">
      {food === null ? (<p>Ne postoji recept</p>) : 
      <div className="wrapper1">
        {food.map((item,id) => (
        <section onClick={() => {HandleProduct(id)}}>
        <img src={item.strMealThumb} className="image-for-recepie"/>
        <p>{item.strMeal}</p>
      
        </section>
      ))}
        </div>
      
      
      
      }
    </div>
    </div>
    </>
  )
}
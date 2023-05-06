import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import "./Random.css";

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&number=9`
    );
    const data = await api.json();
    localStorage.setItem("random", JSON.stringify(data.recipes));
    setRandom(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div>
      <h3 className="title">Dish of the day</h3>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {random.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="card">
                <Link to={"/Recipes/" + recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Random;
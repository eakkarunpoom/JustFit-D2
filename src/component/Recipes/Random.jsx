import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Random() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&number=3`
    );
    const data = await api.json();
    localStorage.setItem("random", JSON.stringify(data.recipes));
    setRandom(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div className="contain">
      <div>
        <h2>Dish of the day</h2>
        {random.map((recipe, index) => (
          <div
            className={`card mb-3 ${index === 0 ? "col-md-8" : "col-md-4"}`}
            key={recipe.id}
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={recipe.image}
                  className="img-fluid rounded-start"
                  alt={recipe.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <motion.a
                    className="btn botton sign-up primary"
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    View Recipe
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Random;

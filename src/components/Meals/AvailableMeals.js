import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://order-food-62c28-default-rtdb.firebaseio.com/Meals.jso");
        if(!response.ok) {
          throw new Error("Something went wrong !");
        }
  
        const data = await response.json();
  
        const loadedMeals = [];
        for(const mealID in data) {
          loadedMeals.push({
            id: mealID,
            name: data[mealID].name,
            description: data[mealID].description,
            price: data[mealID].price
          });
        }
        setMeals(loadedMeals);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const mealsList = Meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {!isLoading && error && <p>{error}</p>}
        {isLoading && !error && <p>Loading the meals !</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;

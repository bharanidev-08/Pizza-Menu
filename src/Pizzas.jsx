/* eslint-disable react/jsx-key */
import PizzaList from "./PizzaList";
/* eslint-disable react/prop-types */
export default function Pizzas({ pizzaDatas }) {
  // console.log(props);-OBJECT
  return (
    <div className="container">
      {pizzaDatas.map((pizza) => (
        <PizzaList
          img={pizza.photoName}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          soldOut={pizza.soldOut}
        />
      ))}
    </div>
  );
}

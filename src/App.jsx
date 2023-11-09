/* eslint-disable no-unused-vars */
import { useState } from "react";
import { pizzaData } from "./data";
import Footer from "./Footer";
import Pizzas from "./Pizzas";
import Header from "./Header";
export default function App() {
  const [data, setdata] = useState(pizzaData);
  return (
    <div>
      <Header />
      <Pizzas pizzaDatas={data} />
      <Footer />
    </div>
  );
}

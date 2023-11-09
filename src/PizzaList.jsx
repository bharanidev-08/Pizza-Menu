/* eslint-disable react/prop-types */
export default function PizzaList({ img, name, ingredients, price, soldOut }) {
  console.log(soldOut);
  return (
    <div className={`pizza-item`}>
      <div className="image">
        <img
          src={img}
          style={{
            filter: soldOut ? "grayScale()" : "none",
          }}
        />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p className="ingredients">{ingredients}</p>
        <p>
          {}
          <b>{price}</b>
        </p>
      </div>
    </div>
  );
}

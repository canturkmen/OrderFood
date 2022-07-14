import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const mealItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "Sushi", Price: "29.99" }].map((meal) => {
        return <li>{meal.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal>
      {mealItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>20.52</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

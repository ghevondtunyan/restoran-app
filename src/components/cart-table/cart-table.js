import React from "react";
import { connect } from "react-redux";
import "./cart-table.scss";
import { deleteFromCart } from "../../actions";

const CartTable = ({ items, deleteFromCart }) => {
  return (
    <>
      <div className="cart__title">Your Orders:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt="Cesar salad"></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__close" onClick={() => deleteFromCart(id)}>
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
// const mapDispatchToProps = () => {
//   return {
//     onDelete: (id) => {
//       console.log(`It is a deleteID ${id}`);
//     },
//   };
// };
const mapDispatchToProps = {
  deleteFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);

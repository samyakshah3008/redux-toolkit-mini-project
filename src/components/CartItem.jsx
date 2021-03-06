import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

export default function CartItem({ id, img, title, price, amount }) {
  const dispatch = useDispatch();

  return (
    <>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4> {title} </h4>
          <h4 className="item-price"> ${price} </h4>
          <button
            onClick={() => {
              dispatch(removeItem(id));
            }}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(increaseItem({ id }))}
            className="amount-btn"
          >
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>

          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decreaseItem({ id }));
            }}
            className="amount-btn"
          >
            <ChevronDown />
          </button>
        </div>
      </article>
    </>
  );
}

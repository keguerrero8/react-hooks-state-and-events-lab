import React, { useState } from "react";

function Item({ name, category }) {
  const [ isItemAdded, setAddedItem ] = useState(false)
  function handleAddedItem () {
    setAddedItem(!isItemAdded)
  }

  return (
    <li className={isItemAdded ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddedItem}>{isItemAdded ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

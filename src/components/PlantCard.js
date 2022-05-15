import React, {useState} from "react";

function PlantCard({plant, onDelete}) {
  const {name ,image ,price} = plant

  let [soldOut ,setSoldOut] = useState(true)

  function handleStockClick(){
    setSoldOut(()=> soldOut = !soldOut)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(()=>{
      onDelete(plant)
    })
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button className="primary" onClick={handleStockClick}>In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}

export default PlantCard;
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList,setPlants}) {

  function onDeletePlant(deletedPlant){
    const newPlantList = plantList.filter((plant)=> plant.id !== deletedPlant.id)
    setPlants(newPlantList)
  }

  const renderPlants = plantList.map((plant)=>{
    return <PlantCard plant={plant} key={plant.id} onDelete={onDeletePlant}/>
  })
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
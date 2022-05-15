import React, { useState,useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  let [plants, setPlants]=useState([])
  let [search, setSearch]=useState("")

  console.log(search)

  const searchList = plants.filter((plant)=>{
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => {
      setPlants(data)
    })
  },[])

  function onAddPlant(plant){
    let newPlants = [...plants,plant]
    setPlants(newPlants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plantList = {searchList} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;

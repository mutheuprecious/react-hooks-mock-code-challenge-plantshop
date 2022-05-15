import React,{ useState } from "react";

function NewPlantForm({onAddPlant}) {

  let [formData , setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })
  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data =>{
      onAddPlant(data)
    })
    
  }

  function handleChange(evt){
    const value = evt.target.value;
    let name = evt.target.name;
    if (name==="price"){
      setFormData({
        ...formData,
        [evt.target.name]: parseInt(value)
      })
    } else{
      setFormData({
        ...formData,
        [evt.target.name]: value
      })
    }
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
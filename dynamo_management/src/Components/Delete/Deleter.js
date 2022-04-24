import { useState } from "react";
import React from "react";
import axios from "axios";
import './Deleter.css';
function Deleter() {
  const [name, setName] = useState("");
  const[id,setId]=useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`${name} + ${id}`)
      axios({
        method: 'post',
        url: 'http://172.17.0.2:5001/del_rec',
        headers: {"Content-Type":'application/json'}, 
        data: {
          "table_name": `${name}`, 
          "id":`${id}`,

        }
      }) .then(function (response) {
        
        alert('Delete Success!');
      })
      .catch(function (error) {
        
        alert('Delete Failed!');
      });
  }



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Table Name :
        <input className="x"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        /><br/>
               Id:         
        <input className="x"
          type="text"
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </label>
      <br/>
      <input className = "y" type="submit" value="Submit" />
    </form>
  );
}

export default Deleter;

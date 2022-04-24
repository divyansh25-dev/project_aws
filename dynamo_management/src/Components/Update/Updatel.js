import { useState } from "react";
import React from "react";
import axios from "axios";
import './Updatef.css';
function Updatel() {
  const [name, setName] = useState("");
  const[id,setId]=useState("");
  const[f,setf]=useState("");
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`${name} + ${id} + ${f}`)
      axios({
        method: 'post',
        url: 'http://172.17.0.2:5001/update_l',
        headers: {"Content-Type":'application/json'}, 
        data: {
          "table_name": `${name}`, 
          "id":`${id}`,
          "l_name":`${f}`,

        }
      }) .then(function (response) {
        
        alert('Update Success!');
      })
      .catch(function (error) {
        
        alert('Update Failed!');
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
        <br/>
               Last Name:    
          <input className="x"
          type="text"
          value={f}
          onChange={e => setf(e.target.value)}
        />
      </label>
      <br/>
      
      <input className = "y" type="submit" value="Submit" />
    </form>
  );
}

export default Updatel;

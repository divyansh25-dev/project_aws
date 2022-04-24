import { useState } from "react";
import React from "react";
import axios from "axios";
function Delete() {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`${name}`)
      axios({
        method: 'post',
        url: 'http://172.17.0.2:5001/del_tab',
        headers: {"Content-Type":'application/json'}, 
        data: {
          "table_name": `${name}`, 

        }
      }).then(function (response) {
        
        alert('Table Deleted!')
      }) .catch(function (error) {
        
        alert('Failed');
      });;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Table Name :
        <input className="x"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Delete;

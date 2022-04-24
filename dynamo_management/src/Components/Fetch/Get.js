import { useState } from "react";
import React from "react";
import axios from "axios";
import './Get.css';
function Get() {
  const [name, setName] = useState("");
  const[id,setId]=useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`${name} + ${id}`)
      axios({
        method: 'post',
        url: 'http://172.17.0.2:5001/one_rec',
        headers: {"Content-Type":'application/json'}, 
        data: {
          "table_name": `${name}`, 
          "id":`${id}`,

        }
      }) .then(function (response) {
        console.log(response)
        if(response.data!=null)
        alert('Yes the record exists!')
        else
        alert('No it does not exists!')
      })
      .catch(function (error) {
        
        console.log(error);
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

export default Get;

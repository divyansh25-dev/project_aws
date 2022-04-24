import { useState } from "react";
import React from "react";
import axios from "axios";
import './Insert.css';
function Insert() {
  const [name, setName] = useState("");
  const[id,setId]=useState("");
  const[f,setf]=useState("");
  const[l,setl]=useState("");
  const[email,setEmail]=useState("");
  const handleSubmit = (evt) => {
      evt.preventDefault();
      
      axios({
        method: 'post',
        url: 'http://172.17.0.2:5001/insert_rec',
        headers: {"Content-Type":'application/json'}, 
        data: {
          "table_name": `${name}`, 
          "id":`${id}`,
          "f_name":`${f}`,
          "l_name":`${l}`,
          "email":`${email}`,

        }
      }) .then(function (response) {
        
        alert('Data Inserted');
      })
      .catch(function (error) {
        
        alert('Failed');
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
          type="number"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <br/>
               First Name:    
          <input className="x"
          type="text"
          value={f}
          onChange={e => setf(e.target.value)}
        />
          <br/>
               Last Name:    
          <input className="x"
          type="text"
          value={l}
          onChange={e => setl(e.target.value)}
        />
        <br/>
               Email:    
          <input className="x"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br/>
      
      <input className = "y" type="submit" value="Submit" />
    </form>
  );
}

export default Insert;

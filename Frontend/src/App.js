import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState();
  const [cms, setCMS] = useState();
  return (
    <>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" value={name} onChange={(e)=>{ setName(e.target.value);}} required/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">CMS</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter CMS" value={cms} onChange={(e)=>{ setCMS(e.target.value);}} required/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => { post(name, cms); setName(""); setCMS(""); alert("Data Inserted")}}>Submit</button>
      </form>

    </>
  );
}

function post(name,cms)
    {
        fetch('http://localhost:3001/add',{
            method:'POST',
            body:JSON.stringify(
                {
                    Name:name,
                    CMS:cms,
                }
            ),  
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(res=>res.json()).then(data=>console.log(data))
    }

export default App;

import React, {useState, useEffect} from "react";
import Table from "./table";


require("es6-promise").polyfill();
require("isomorphic-fetch");


const Large = () => {
    const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json")
    .then(response => response.json())
    .then((json) => setData(json));
  }, []);

  const search= (rows) => {
    return rows.filter
    (row => row.firstName.toLowerCase().indexOf(q) > -1) ||
    (row => row.lastName.toLowerCase().indexOf(q) > -1) 
    
  }

  return (
    <div className="App">
     <div>
       <input className="input_tab" type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="search"  />
     </div>
     <div>
       <Table data={search(data)} />
     </div>
    </div>
  );
}


export default Large



  

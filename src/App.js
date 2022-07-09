import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
function App() {
  const [data, setData] = useState([]);
  const [queryText,setQueryText]=useState("")
  //   useEffect(()=>{
  // fetch('https://restcountries.com/v3.1/all')
  // .then(response=>response.json())
  // .then(response=>setCountrie(response));//get request yollamk ıstedıgımız adresı alır parametre ıle 
  //   },[])  

  const fetchData=()=>{ //async asenkron fonksiyondur
    axios
    .get(`https://jsonplaceholder.typicode.com/comments?name=${queryText}`)
    .then(response=>setData(response.data))

   
}
  useEffect(() => {
 fetchData() //querytext baglı olsun ve her querytext degıstıgınde  fetchdata cagırısn
  }, [queryText])


  return (
    <div className="App">
      <div><input value={queryText} placeholder="ara" onChange={(e)=>{setQueryText(e.target.value)}} className="fgh"/> </div>
       
 
      {data.map((t) => {
        return (
          <div key={t.name}>
            <h2> {t.name} </h2>
            <h4>{t.email} </h4>
            <p>
            {t.body}

            </p>
          </div>
        )
      })}
    </div>
  );
}

export default App;

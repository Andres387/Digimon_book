import React from 'react';
import './App.css';
import ItemDigimonList from './components/ItemDigimonList';


// const sample = {
//   name: "Koromon",
//   img: "https://digimon.shadowsmith.com/img/koromon.jpg",
//   level: "In Training"
// }
function App() {
  const[ListDigimons, setListDigimons] = React.useState([]);

  React.useEffect(()=>{
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then(response =>response.json())
      .then(dataJson =>{setListDigimons(dataJson)});
  },[])

  return (
    <div className="App">
      <h1>Digimon PryyBook</h1>
      {ListDigimons.map(digimon => <ItemDigimonList 
          name={digimon.name} 
          img={digimon.img} 
          level={digimon.level}
          key = {digimon.name} 
          />
        )
      }
    </div>
  );
}

export default App;

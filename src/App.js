import React, {useState} from "react";
import './App.css';
import Header from "./component/header";
import CardGrid from "./component/card-grid";

import importedImg from "./component/imgData";

function App() {
  //const [imgData, setImgData] = useState(importedImg);
  let score = {current:1, high:1};
  return (
    <div className="App">
      <Header score={score}/>
      <CardGrid data={importedImg} />
    </div>
  );
}

export default App;

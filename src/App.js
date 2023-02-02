import React, { useState } from "react";
import "./App.css";

function App() {

  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time)


  const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  setCtime(time)
}
setInterval( UpdateTime,1000)
  return(
  <>
  <div>
    <h1>{Ctime}</h1>
  </div>


  </>
  )
}

export default App;

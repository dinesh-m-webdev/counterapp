import { useState } from "react";
import "./App.css";

function App(){

  const [count,setcount]=useState(0);

return( 
  <body classname="background">
    
  
   
    <div className="container">
    <h1>counter app</h1>
    <h1 classname="count">{count}</h1>
    <div className="buttons">
    <button onClick={()=>setcount(count >=1 ?count - 1 : 0)}>-</button>
    <button onClick={()=>setcount(0)}>reset</button> 
    <button onClick={()=>setcount(count+1)}>+</button>
     </div>
  
  </div>
   
  </body>     
);


}

export default App;

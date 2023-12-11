import React from "react";
import "./App.css";

function Head({title}) {
  return (
    <header>
     

<h1 className="h1">{title}</h1>
        

    </header>
  )
}

Head.defaultProps={

  title:'Todo'
}
export default Head; 
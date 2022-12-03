import React from "react";
import { navigate } from "gatsby";


function GoBack() {
  return (  
    <button onClick={() => navigate(-1)} className="btn btn-outline-dark" style={{width:"40%"}}>戻る</button>
  );
}

export default GoBack
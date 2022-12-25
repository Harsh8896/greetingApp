import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
// const cssStyle = {};
let color='';

if(curDate >= 1 && curDate < 12){
         greeting ="Good Morning";
        color = "green";

} else if( curDate >= 12 && curDate < 16){
      greeting = "Goog Afternoon";
     color = "cyan";

} else if(curDate >= 16 && curDate < 19){
      greeting = "Good Evening";
     color = "";
      
} else{
    greeting = "Good Night!";
   color = "yellow";

}



ReactDOM.render(
    <div>
   <h1>Hello sir, <span style={{color:color}}> {greeting}</span></h1>
    </div>, 
    document.getElementById("root")
);
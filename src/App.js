import React from "react";
import "./style.css";
import Button from "./Button";
function App()
{
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Hello World!</h1>   

            <Button title="App Store"/>
            <Button title=" Play Store"/>
            
            {/* <button class= "button"><h1>Play Store</h1></button>
            <button class= "button"><h1>App Store</h1></button> */}
        </div>
    )  
}
export default App;
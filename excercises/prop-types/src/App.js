import React from "react";
import Display from "./Display";
//other component imports go here
function App() {
    return (
        <div>
            <Display name="Jessica" age={10} attributes={{height: "10cm", weight: 1000}} />
        </div>
    )
}



export default App;

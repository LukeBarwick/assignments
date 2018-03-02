import React from "react";

function TodoComponent(props){
    return(
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <h3>{props.description}</h3>
            <div>
                <img alt={props.title} src={props.img}/>
            </div>
        </div>
    )
}

export default TodoComponent;

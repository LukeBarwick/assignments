import React from "react";

function Pet(props) {
    return <div>
                <h2>Pet Name - {props.name}</h2>
                <h2>Pet Breed - {props.breed}</h2>
            </div>
}


export default Pet;

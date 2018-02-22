import React from "react";
import PropTypes from "prop-types";
import Pet from "./Pet";

function Friend(props){
 const mappedPets = props.pets.map((pet, i) => {
         return <Pet name={pet.name} breed={pet.breed}/>
 })
return <div>
            <h1> {props.name} </h1>
            <h2> {props.age} </h2>
            <div> {mappedPets} </div>

        </div>
}
Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    pets: PropTypes.array
}

export default Friend;

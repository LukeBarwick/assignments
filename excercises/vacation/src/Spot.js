import React from 'react';


function Spot(props) {
let backgroundColor = "greenyellow"


   if(props.time === "Spring"){
   backgroundColor = "white";
 }

   if(props.time === "Summer"){
     backgroundColor = "green";
 }

   if (props.time === "Fall"){
       backgroundColor = "brown";
 }
   if (props.time === "Winter"){
         backgroundColor = "greenyellow"
 }


const styles = {
  backgroundColor
};

    return <div className="block" style={styles}>
                <div className="Cost">Cost: {props.price}</div>

                <div className="Location">Location: {props.place}</div>

                <div className="Time">Best time of year to go: {props.time}</div>
           </div>
}


export default Spot;

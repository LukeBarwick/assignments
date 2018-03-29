import React from 'react';
import Spot from './Spot';

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: "$40",
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: "$900",
    timeToGo: "Winter"
  },{
    place: "China",
    price: "$1200",
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: "$1100",
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: "$400",
    timeToGo: "Spring"
  }
]
const mappedSpots = vacationSpots.map((spot) =>{
    return <div>
            <Spot  price={spot.price}
                   place={spot.place}
                   time={spot.timeToGo}
             />
           </div>
})

function App() {
    return (
        <h1>{mappedSpots}</h1>
    )
}

export default App;

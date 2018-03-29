import React from "react"

function Blogpost(props){
  return (
  <div>
    <h1> {props.title} </h1>
    <h2> {props.subtitle} </h2>
    <a> {props.author} </a>
    <div> {props.date} </div>
  </div>

  )
}

export default Blogpost;

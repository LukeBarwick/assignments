import React, {Component} from "react";
import Blogpost from "./Blogpost";

const posts = [{
  title: "Man must explore, and this is exploration at its greatest",
  subtitle: "Problems look mighty small from 150 miles up",
  author: "Start Boostrap",
  date: "September 24, 2018"
},
{
  title:"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." ,
  subtitle: "",
  author: "Start Boostrap",
  date: "September 18, 2018"
},
{
  title:"Science has not yet mastered prophecy",
  subtitle: "We predict too much for the next year and yet far too little for the next ten.",
  author: "Start Boostrap" ,
  date: "August 24, 2018"
},
{
  title: "Failure is not an option" ,
  subtitle: "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
  author: "Start Bootstrap",
  date: "August 24, 2018"
}]

class Bloglist extends Component {
  render() {
    const mappedPosts = posts.map((post)=> {
      return(
        <Blogpost
        title = {post.title}
        subtitle = {post.subtitle}
        author = {post.author}
        date = {post.date}
        />)
    })
    return (
    <div>
      <div> {mappedPosts} </div>
    </div>
  )}
}

export default Bloglist;

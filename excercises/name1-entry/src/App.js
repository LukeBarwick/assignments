import React, {Component} from "react"


class App extends Component {
    constructor(){
      super()
      this.state = {
        currentWord: "",
        names: [],
      }

}

handleChange = (e) => {
  this.setState({
    currentWord: e.target.value,
  })
}
handleSubmit = (e) => {
  this.setState({
    names: [this.state.currentWord, ...this.state.names]
  })
  console.log(this.state.names)
}

    render(){
      const myList = this.state.names.map((name, i)=> {
        return (

          <li key = {i+name}> {name} </li>
        )
      })
      return(
      <div>
       <h1>
         {this.state.currentWord}
       </h1>
       <input type='text' value={this.state.currentWord} onChange={this.handleChange}/>
       <button onClick={this.handleSubmit}> Submit</button>
       <ol>
         {myList}
       </ol>
      </div>
    )};
  };
export default App;

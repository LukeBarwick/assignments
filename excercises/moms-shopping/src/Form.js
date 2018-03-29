import "React" from "react";

function Form(){
  this.state={
    name: "",
    age: 0
  }

  handleSubmit = () => {
    
  }

  return (
    <form onSubmit={this.handleSubmit}>
      <input />
      <input />
      <button ></button>
    </form>
  )
}

export default Form;

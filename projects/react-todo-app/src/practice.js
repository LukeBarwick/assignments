import React, {Component} from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoComponent from "./TodoComponent";

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            value: '',
            description: ''
        }
    }
    this.handleChangee = this.handleChangee.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    componentDidMount() {
        axios.get("https://api.vschool.io/nateJ/todo").then(response => {
            this.setState({
                todos: response.data

            })
        })
    }
    handleChangee(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let newTodo = {
            title: this.state.title,
            description: this.state.description
        }

    }
    axios.post("https://api.vschool.io/nateJ/todo", newTodo)


render() {
    const mappedTodos = this.state.todos.map((todo, index) => {
        return (
            <TodoComponent
                title={todo.title}
                img={todo.imgUrl}
                key={todo + index}
                />
        )
    })
    return (
        <div>
            {mappedTodos}
        <div>
            <TodoForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
        </div>

    </div>
    )
}
}
export default App;

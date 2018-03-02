import React, {Component} from "react";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            names: []

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((prevState)=> {
            return {
                name: "",
                names: [prevState.name, ...prevState.names]
}
        })

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const mappedNames = this.state.names.map((name)=> {
            
        })
        return (<div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.name} name="name" type="text"/>
                    <button  name="button" type="submit"> Submit </button>
                </form>
                    <h1>
                        <ol>
                            <li><h3>{this.state.name}</h3></li>
                        </ol>
                    </h1>

                </div>)
    }
}

export default Form;

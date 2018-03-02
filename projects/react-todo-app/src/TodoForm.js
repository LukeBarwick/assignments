import React from "react";

function TodoForm(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        value={props.title}
                        name="title"
                        /> </label>
                    <label><input
                        type="text"
                        onChange={props.handleChange}
                        value={props.title}
                        name="description"
                        /> </label>
                    <label><input
                        type="text"
                        onChange={props.handleChange}
                        value={props.title}
                        name="Price"
                        /> </label>
                    <label><input
                        type="text"
                        onChange={props.handleChange}
                        value={props.title}
                        name="description"
                        /> </label>
                        
        <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;

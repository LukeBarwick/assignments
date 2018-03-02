import React from "react";

const SignupForm = props => {
    return (
        <form onSubmit={props.handleChange}>
            <label>First Name:
            <input
                onChange={props.handleChange}
                value={props.firstName}
                name="firstName"
                type="text"/>
            </label>
            <br/>

            <label>Last Name:
                <input
                    onChange={props.handleChange}
                    value={props.lastName}
                    name="lastName"
                    type="text"/>
            </label>
            <br/>

            </form>

    )
}

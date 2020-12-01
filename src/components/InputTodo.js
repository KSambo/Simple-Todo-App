import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            // title: e.target.value
            [e.target.name]: e.target.value
            // used for handling multiple text input field
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };

    

    render() {
        return (
            <form onSubmit = {this.handleSubmit} className="form-container" >
                <input 
                    type ="text" 
                    placeholder ="Add Todo..." 
                    value = {this.state.title} 
                    name = "title"
                    onChange = {this.onChange} 
                    className = "input-text"
                />
                <input type ="submit" value ="Submit" className="input-submit" />
            </form>
        )
    }
}

export default InputTodo
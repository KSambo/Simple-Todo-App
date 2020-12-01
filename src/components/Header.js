import React from "react"

const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }
    
    return (
        <header style={headerStyle}>
            <h1 style={{ fontsize: "25px", marginBottom: "15px" }}> Simple Todo App </h1>
            <p style={{ fontsize: "10px "}}> Please add to-dos item(s) through the input field </p>
        </header>
    )
}

export default Header
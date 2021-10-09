import React, { useState } from "react";
function UserCard(props) {
    const {
        user: { id, firstname, lastname, isSelected },
        toggleUserSelection } = props;

    const handleClick = () => {
        toggleUserSelection(id)
    }

    const style = {
        border: isSelected ? '5px solid green' : undefined,
    }
    return (
        <article onClick={handleClick} style={style} >
            <p>ID: {id}</p>
            <h1>
                User Name: {firstname} {lastname}
            </h1>
        </article>
    );
}

export default UserCard;
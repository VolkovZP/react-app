import React, { useState } from "react";

export default function Aloha(props) {

    const { userId, deleteUser, name } = props;

    const [isGreeting, setIsGreeting] = useState(true);

    const handlerAloha = () => setIsGreeting(!isGreeting);

    const deleting = () => deleteUser(userId);

    return (
        <>
            <h1>{isGreeting ? 'Hello' : 'Bye'} {name}</h1>
            <button onClick={handlerAloha}>switch</button>
            <button onClick={deleting}>delete</button>
        </>
    )
}

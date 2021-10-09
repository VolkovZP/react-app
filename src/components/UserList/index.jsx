import React, { useState } from "react";
import UserCard from "./UserCard";


export default function UserList(props) {

    const { users, setUsers } = props;

    const toggleUserSelection = (id) => {
        setUsers(
            users.map((user) => ({
                ...user,
                isSelected: id === user.id ? !user.isSelected : user.isSelected,
            }))
        );
    };
    const mapUser = (user) => {
        return <UserCard key={user.id} user={user} toggleUserSelection={toggleUserSelection} />;
    };
    return (
        <section>
            <h1>USER LIST FROM DB</h1>
            {users.map(mapUser)}
        </section>
    );
}

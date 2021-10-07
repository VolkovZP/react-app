import React, { Component } from "react";
import UserCard from "./UserCard";

class UserList extends Component {
    toggleUserSelection = (id) => {
        const { users, setUsers } = this.props;
        setUsers(
            users.map((user) => ({
                ...user,
                isSelected: user.id === id ? !user.isSelected : user.isSelected,
            }))
        );
    };

    mapUser = (user) => {
        return <UserCard key={user.id} user={user} toggleUserSelection={this.toggleUserSelection} />;
    };

    render() {
        const { users } = this.props;
        return (
            <section>
                <h1>USER LIST FROM DB</h1>
                {users.map(this.mapUser)}
            </section>
        );
    }
}

export default UserList;
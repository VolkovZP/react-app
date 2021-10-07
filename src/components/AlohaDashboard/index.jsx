import { Component } from "react";
import AlohaSortedList from "./AlohaSortedList";

class AlohaDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'bob svaget'
                },
                {
                    id: 2,
                    name: 'li kurasava'
                },
            ]
        }
    }


    setUsers = (users) => {
        this.setState({
            users,
        })
    }

    deleteUser = (userId) => {
        const { users } = this.state;
        this.setState({
            users: users.filter((item) => item.id !== userId),
        });
    };
    render() {
        const { users } = this.state
        return (
            <>
                <AlohaSortedList users={users} setUsers={this.setUsers} deleteUser={this.deleteUser} />
            </>
        )

    }
}

export default AlohaDashboard;
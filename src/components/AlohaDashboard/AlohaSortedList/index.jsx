import { Component } from "react";
import AlohaList from "../AlohaList";

class AlohaSortedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDirectSort: true,
        }
    }
    sortUser = () => {
        const { isDirectSort } = this.state;
        const { users, setUsers } = this.props;
        const copyOfUser = [...users];
        setUsers(copyOfUser.sort((a, b) => isDirectSort ? b.id - a.id : a.id - b.id))
        this.setState({ isDirectSort: !isDirectSort })

    }
    render() {
        const { deleteUser } = this.props
        return (
            <>
                <AlohaList users={this.props.users} deleteUser={deleteUser} />
                <button onClick={this.sortUser}>ChangeSortUsers</button>
            </>
        )
    }
}

export default AlohaSortedList;
import { useState } from "react";
import AlohaList from "../AlohaList";

export default function AlohaSortedList(props) {

    const [isDirectSort, setIsDirectSort] = useState(true);
    const { users, setUsers, deleteUser } = props;

    const sortUser = () => {
        const copyOfUser = [...users];
        setUsers(copyOfUser.sort((a, b) => isDirectSort ? b.id - a.id : a.id - b.id))
        setIsDirectSort(!isDirectSort);

    }

    return (
        <>
            <AlohaList users={users} deleteUser={deleteUser} />
            <button onClick={sortUser}>ChangeSortUsers</button>
        </>
    )
}

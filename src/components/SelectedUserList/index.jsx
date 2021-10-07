import React from 'react'

export default function SelectedUserList(props) {
    const { users } = props;
    const selectedUsers = users.filter(user => user.isSelected)
    return (
        <div>
            {selectedUsers.map(({ firstname, lastname, id }) => (
                <span key={id}> {firstname} {lastname} </span>
            ))}
        </div>
    )
}

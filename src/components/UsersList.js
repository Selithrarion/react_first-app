import React from 'react'
import UserItem from './UserItem'

function UsersList(props) {
        return (
            <div>
                {props.users.map(user => <UserItem user={user} key={user.id} /> )}
            </div>
        )
}

export default UsersList
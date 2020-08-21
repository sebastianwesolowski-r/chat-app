import React from 'react';

import {UsersListContainer, ListHeader} from './users-list.styles';

const UsersList = ({users}) => {
    return(
    <UsersListContainer>
        <ListHeader>Users online</ListHeader>
        {users ? (
            users.map(user => <p key={user.id}>{user.username}</p>)
        ) : null}
    </UsersListContainer>
);};



export default UsersList;
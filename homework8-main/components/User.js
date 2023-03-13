


import React from 'react';

export const User = ({ user }) => {
    return (
        <>
            <p style={{ marginLeft: '10px' }}>Name: {user.name}</p>
            <p style={{ marginLeft: '10px' }}>Username: {user.username}</p>
            <p>-------------------------</p>
        </>
    );
};
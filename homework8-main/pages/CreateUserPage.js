import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/slices/users-slice';

export const CreateUserPage = () => {
    const dispatch = useDispatch();
    const { loading, error, fulfilled } = useSelector(({ users }) => users);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser({ name, email }));
    };
    const changeNameInput = (e) => {
        setName(e.target.value);
    };
    const changeEmailInput = (e) => {
        setEmail(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={changeNameInput}
            />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={changeEmailInput}
            />
            {error ? (
                <h1>{error.message}</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                <h1 style={{ color: 'green' }}>{fulfilled}</h1>
            )}
            <button type="submit">Create User</button>
        </form>
    );
};
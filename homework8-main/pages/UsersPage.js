import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../components/User';
import { fetchUsers } from '../redux/slices/users-slice';

export default function UsersPage() {
    const { error, usersItems, loading } = useSelector(({ users }) => users);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    console.log(usersItems);
    return (
        <div>
            UsersPage
            <h1>============</h1>
            {error && <h1 style={{ color: 'red' }}>{error.message}</h1>}
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {usersItems &&
                        usersItems.map((user) => (
                            <div key={user.id}>
                                <User user={user} />
                            </div>
                        ))}
                </>
            )}
        </div>
    );
}
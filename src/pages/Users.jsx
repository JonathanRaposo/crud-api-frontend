import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import ApiService from '../api/api-service.js';

const Users = () => {
    const [users, setUsers] = useState(null);
    const [errorMessage, setErrorMessage] = useState(undefined);

    useEffect(() => {
        ApiService
            .getUsers()
            .then(data => {
                setUsers(data)
            })
            .catch(err => {
                console.log(err)
                setUsers(null)
                let msg = err.response.data.message;
                setErrorMessage(msg);
            })
    }, []);

    return (
        <div>
            {errorMessage && <p className='notFound'>{errorMessage}</p>}
            {users && (
                <>
                    {users.length > 0 ? <h1 className='list-heading'>User list</h1> :
                        <h1 className='list-heading'>Empty list</h1>}
                    <div className='Users'>
                        {users && users.map((user) => (
                            <Card key={user.id} user={user} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Users;
/* eslint-disable react-hooks/exhaustive-deps */

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from '../api/api-service.js';

const User = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(undefined);

    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        ApiService
            .getUser(id)
            .then(data => {
                setUser(data);
            })
            .catch(err => {
                let msg = err.response.data.message;
                setMessage(msg);
            })
    }, [id]);

    const handleDeleteUser = async () => {
        window.alert(`This will remove ${user.fullName} from your list`);
        try {
            const response = await ApiService.deleteUser(id);
            setUser(null);
            setMessage(response.message);
            setTimeout(() => {
                navigate('/users');
            }, 2000);

        } catch (err) {
            let msg = err.response.data.message;
            setMessage(msg);
        }
    }

    return (
        <>
            {message && <p className="message">{message}</p>}
            {user && (
                <div className='User'>
                    <p><strong>Name: </strong>{user.fullName} </p>
                    <p><strong>Age: </strong> {user.age}</p>
                    <p><strong>Email: </strong> {user.email}</p>
                    <div>
                        <p className='update-link'>
                            <Link to={`/users/${user.id}/update`}>Update </Link>
                        </p>
                        <button onClick={handleDeleteUser}>Delete</button>
                    </div>

                </div>
            )}
        </>
    );
}

export default User;
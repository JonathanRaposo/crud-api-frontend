/* eslint-disable react-hooks/exhaustive-deps */

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5005';

const User = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(undefined);

    const { id } = useParams();
    const navigate = useNavigate()
    const getUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/users/${id}`);
            setUser(response.data)
        } catch (err) {
            console.log('Error gettting user: ', err);
        }
    }

    useEffect(() => {
        getUser()
    }, [id]);

    const handleDeleteUser = async () => {
        window.alert('This will delete user.')
        try {
            const { data } = await axios.delete(`${API_URL}/api/users/${id}`);
            setUser(null)
            setMessage(data.message);
            setTimeout(() => {
                navigate('/users');
            }, 2000);

        } catch (err) {
            console.log('Error deleting user: ', err);
        }
    }

    return (
        <>
            {message && <p className="message">{message}</p>}
            {user && (
                <div className='User'>
                    <p><strong>Name: </strong>{user.name} </p>
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
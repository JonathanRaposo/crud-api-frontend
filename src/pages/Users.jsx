import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';

const API_URL = 'http://localhost:5005';

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/users`);
            setUsers(response.data);
        } catch (err) {
            console.log('Error fetching users: ', err);
        }
    }
    useEffect(() => {
        getUsers()
    }, []);



    return (
        <>
            <h1 style={{ textAlign: "center", fontSize: "60px" }}>User list</h1>
            <div className='Users'>

                {users && users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </>
    );
}

export default Users;
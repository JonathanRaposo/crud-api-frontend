/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const API_URL = 'http://localhost:5005';

const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [emailError, setEmailError] = useState(undefined);

    const navigate = useNavigate();

    const handleAddUser = async (e) => {
        e.preventDefault();

        const newUser = {
            name,
            age,
            email
        }
        try {
            await axios.post(`${API_URL}/api/users`, newUser);
            setName('');
            setAge('');
            setEmail('');
            navigate('/users')
        } catch (err) {
            console.log('Error adding user: ', err)
            if (typeof err.response.data.message === 'string') {
                setEmailError(err.response.data.message);
                return;

            }

            setErrorMessage(err.response.data.message);
        }
    }

    return (
        <div className='AddUser'>
            <h3>Add user</h3>


            <label htmlFor='name'>Name</label>
            <input

                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}

            />


            <label htmlFor="age">Age</label>
            <input

                type="number"
                name="age"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}

            />


            <label htmlFor="age">Email</label>
            <input

                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />
            <button type="submit" onClick={handleAddUser}>Add</button>

            {errorMessage && errorMessage.map((msg, i) => (
                <p key={i} className='errorMessage'>{msg}</p>
            ))}
            {emailError && <p className='errorMessage'>{emailError}</p>}
        </div>
    );
}

export default AddUser;

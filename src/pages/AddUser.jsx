/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../api/api-service.js';

const AddUser = () => {
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [otherError, setOtherError] = useState(undefined);

    const navigate = useNavigate();

    const handleAddUser = async (e) => {
        e.preventDefault();

        try {
            await ApiService.addUser({ fullName, age, email });
            setFullName('');
            setAge('');
            setEmail('');
            navigate('/users')
        } catch (err) {
            console.log('Error adding user: ', err)
            if (typeof err.response.data.message === 'string') {
                setOtherError(err.response.data.message);
                return;

            }

            setErrorMessage(err.response.data.message);
        }
    }

    return (
        <div className='AddUser'>
            <h3>Add user</h3>


            <label htmlFor='fullName'>Full name</label>
            <input

                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}

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
            {otherError && <p className='errorMessage'>{otherError}</p>}
        </div>
    );
}

export default AddUser;

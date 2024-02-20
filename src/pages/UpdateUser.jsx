import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const API_URL = 'http://localhost:5005';

const UpdateUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [emailError, setEmailError] = useState(undefined);

    const { id } = useParams();
    const navigate = useNavigate()
    console.log(id)
    useEffect(() => {
        axios
            .get(`${API_URL}/api/users/${id}`)
            .then((response) => {
                const { name, age, email } = response.data;
                setName(name);
                setAge(age);
                setEmail(email);
            })
            .catch((err) => {
                console.log('Error getting user: ', err);
            })
    }, [id])





    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = {
            name,
            age,
            email
        }
        try {
            await axios.put(`${API_URL}/api/users/${id}`, updatedUser);
            setName('');
            setAge('');
            setEmail('');
            navigate(`/users/${id}`)
        } catch (err) {
            console.log('Error updating user: ', err)
            if (typeof err.response.data.message === 'string') {
                setEmailError(err.response.data.message);
                return;

            }

            setErrorMessage(err.response.data.message);
        }
    }

    return (
        <div className='UpdateUser'>
            <h3>Edit user</h3>


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
            <button type="submit" onClick={handleSubmit}>Update</button>
            {errorMessage && errorMessage.map((msg, i) => (
                <p key={i} className='errorMessage'>{msg}</p>
            ))}
            {emailError && <p className='errorMessage'>{emailError}</p>}
        </div>
    );
}

export default UpdateUser;
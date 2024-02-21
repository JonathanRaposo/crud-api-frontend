import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5005/api'
});

const addUser = async (newUser) => {
    const response = await api.post(`/users`, newUser);
    return response.data;

}
const getUsers = async () => {

    const response = await api.get('/users');
    return response.data;

}
const getUser = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
}
const updateUser = async (id, updatedData) => {
    const response = await api.put(`/users/${id}`, updatedData);
    return response.data;
}

const deleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
}



export default {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,

};

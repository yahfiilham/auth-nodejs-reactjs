import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar'


function Dashboard() {
    const [name, setName] = useState('');
    const[token, setToken] = useState('');
    const[expire, setExpire] = useState('');
    const[users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
        // getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const refreshToken = async () => {
        try {
            const response =  await axios.get('http://localhost:5050/token');
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            // console.log(decode);
            setName(decode.name);
            setExpire(decode.exp)
        } catch (error) {
            if(error.response) {
                navigate('/')
            }
        }
    }

    const axiosJWT = axios.create();

    // memanggil endpoint refresh token tanpa haru reload dengan axios intecepter
    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()) {
            const response =  await axios.get('http://localhost:5050/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decode = jwt_decode(response.data.accessToken);
            setName(decode.name);
            setExpire(decode.exp)
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async() => {
        const response =  await axiosJWT.get('http://localhost:5050/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        setUsers(response.data);
    }

    return (
        <div className="container mt-5">
            <Navbar />
            <h1>Welcome Back: {name}</h1>
            <button className="button is-info" onClick={getUsers}>Get Users</button>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, i) => (
                    <tr key={user.id}>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard

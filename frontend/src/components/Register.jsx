import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5050/users', {
                name, email, password, confirmPassword,
            });
            navigate('/');
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form 
                            className="box"
                            onSubmit={ Register }
                        >
                        <p className="has-text-centered">{msg}</p>
                            <div className="field mt-5">
                                <label className="label">Name</label>
                                <div className="controls">
                                    <input type="text"
                                    className="input" 
                                    value={name} 
                                    onChange={ (e) => setName(e.target.value)}
                                    placeholder="Name" />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Email</label>
                                <div className="controls">
                                    <input type="text" 
                                    className="input" 
                                    value={email} 
                                    onChange={ (e) => setEmail(e.target.value)}
                                    placeholder="example@example.com" />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label">Password</label>
                                <div className="controls">
                                    <input type="password" 
                                    className="input" 
                                    value={password} 
                                    onChange={ (e) => setPassword(e.target.value)}
                                    placeholder="*******" />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <label className="label"> Confirm Password</label>
                                <div className="controls">
                                    <input type="password" 
                                    className="input" 
                                    value={confirmPassword} 
                                    onChange={ (e) => setConfirmPassword(e.target.value)}
                                    placeholder="*******" />
                                </div>
                            </div>
                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Register

import React, { useState } from 'react';
import axios from 'axios';
import config from '@config';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.apiUrl1}/register`, { 
                email: email,
                password: password
            });
            console.log(response.data); 
        } catch (error) {
            console.error(error.response.data); 
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default RegisterForm;

import React, { useState } from 'react';
import '../style.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // useNavigate ni chaqirish

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !newEmail || !phoneNumber || !newPassword) {
            setErrorMessage("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(newEmail)) {
            setErrorMessage("Iltimos, to'g'ri email manzilini kiriting!");
            return;
        }
        if (!/^\d{9,15}$/.test(phoneNumber)) {
            setErrorMessage("Iltimos, to'g'ri telefon raqamini kiriting (9-15 raqam).");
            return;
        }
        setErrorMessage('');

        const userData = { email: newEmail, password: newPassword };
        localStorage.setItem('userData', JSON.stringify(userData)); 
        setFirstName('');
        setLastName('');
        setNewEmail('');
        setPhoneNumber('');
        setNewPassword('');
        navigate('/Signin');
    };

    return (
        <div className="ww2">
                    <div className="containerr">
            <div className="sign-up-form">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <h2>Ro'yxatdan o'ting</h2>
                <form onSubmit={handleSignUpSubmit}>
                    <div className="input-group">
                        <label>Ism:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Familiya:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Telefon raqami:</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Parol:</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='buttonB' type="submit">Ro'yxatdan o'tish</button>
                    <p style={{color:"#007bff",marginTop:"20px"}} className='fext'>
                        Hisobingiz bormi?
                        <Link to='/Signin'> <span className="toggle-link"> Kirish</span></Link>
                    </p>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Signup;
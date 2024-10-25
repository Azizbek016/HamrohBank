import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
    const [showSignIn, setShowSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        const savedData = localStorage.getItem('userData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setEmail(parsedData.email); 
        }
    }, []);

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        const savedData = JSON.parse(localStorage.getItem('userData'));
        if (savedData && savedData.email === email && savedData.password === password) {
            setSuccessMessage("Kirish muvaffaqiyatli!");
            setErrorMessage('');
           
            navigate('/'); 
        } else {
            setErrorMessage("Email yoki parol noto'g'ri!");
            setSuccessMessage('');
        }
    };

    return (
        <div className="ww">
                    <div className="containerr">
            <div className="auth-forms">
                {successMessage && <p className="success-message">{successMessage}</p>}
                {showSignIn ? (
                    <form onSubmit={handleSignInSubmit} className="form">
                        <h2>Kirish</h2>
                        <div className="input-group">
                            <label>Email:</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label>Parol:</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <button className='buttonB' type="submit">Kirish</button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <p style={{textAlign:"center" ,marginLeft:"-129px",marginTop:"20px"}}>
                            Hisobingiz yo`qmi? 
                            <Link to='/Signup'> <span className="toggle-link"> Royxatdan oting</span></Link>
                        </p>
                    </form>
                ) : (
                    <Signup />
                )}
            </div>
        </div>
        </div>
    );
}

export default Signin;
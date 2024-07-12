import React, { useState } from 'react';
import './styles/Home.css'; 
import flowers from '../imgs/flowers.jpg';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = (value: string) => {
        setPasscode(prevPasscode => prevPasscode + value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        const actualPasscode = '1234';

        if (passcode === actualPasscode) { 
            console.log('yay!');
            setError('');
            navigate('/timeline'); 
        } else { 
            setError('Password invalid');
            setPasscode('');
        }
    };

    const handleClear = () => {
        setPasscode('');
        setError('');
    };

    const handleGoBack = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <div className="center-container"> 
            <div className="content-container">
                <div className="image-container">
                    <img src={flowers} alt="Car" className="car-image" />
                </div>

                <div className="passcode-container">
                    <h2>Enter Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input
                                type="password"
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                placeholder="insert hint"
                                className="passcode-input"
                            />
                        </div>
                        <div className="keypad-container">
                            <button className="buttons" type="button" onClick={() => handleButtonClick('1')}>1</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('2')}>2</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('3')}>3</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('4')}>4</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('5')}>5</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('6')}>6</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('7')}>7</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('8')}>8</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('9')}>9</button>
                            <button className="buttons" type="button" onClick={handleClear}>Clear</button>
                            <button className="buttons" type="button" onClick={() => handleButtonClick('0')}>0</button>
                            <button className="buttons" type="submit">Submit</button>
                        </div>
                    </form>
                    {error && <p className="error-message">{error}</p>} 
                </div>
            </div>
        </div>
    );
};

export default Home;

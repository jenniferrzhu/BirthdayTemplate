import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Question.css';

const Question = () => {
    const [noCount, setNoCount] = useState<number>(0);
    const [yesPressed, setYesPressed] = useState<boolean>(false);
    const [noPosition, setNoPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    
    const yesButtonSize = noCount * 20 + 16;
    const navigate = useNavigate();

    const handleNoClick = () => {
        setNoCount(noCount + 1);
        const newX = Math.random() * (window.innerWidth - 100);
        const newY = Math.random() * (window.innerHeight - 50);
        setNoPosition({ x: newX, y: newY });
    };

    const handleYesClick = () => {
        setYesPressed(true);
        navigate('/letter'); 
    };

    const getNoButtonText = () => {
        const phrases = [
            "no",
            "are you sure?",
            "come on now",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
            "add comment",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="container">
            <>
                <img src="https://media.tenor.com/tO85mO366xYAAAAi/amore-love-you.gif" alt="Love You GIF" />
                <h1>~Question~</h1>
                <div className="button">
                    <button
                        className="yes" 
                        onClick={handleYesClick}
                    >
                        yes
                    </button>
                    <button
                        onClick={handleNoClick}
                        className="no"
                        style={{ position: 'absolute', left: `${noPosition.x}px`, top: `${noPosition.y}px` }}
                    >
                        {noCount === 0 ? "no" : getNoButtonText()}
                    </button>
                </div>
            </>
        </div>
    );
};

export default Question;

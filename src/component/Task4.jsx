import React, { useState } from "react";
import "/src/index.css";

export function Task4() {
    const [fireworks, setFireworks] = useState(false);

    const handleClick = () => {
        setFireworks(true);
        setTimeout(() => setFireworks(false), 2000);
    };

    return (
        <div className="page-container">
            <div className="content">
                <h1 className="title">Қош келдініз!</h1>
                <p className="subtitle">Сиқыр көруге дайнсынба? ✨</p>
                <button className="start-button" onClick={handleClick}>Бастау</button>
                {fireworks && <div className="fireworks" />}
            </div>
        </div>
    );
}